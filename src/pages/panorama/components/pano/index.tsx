/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactPhotoSphereViewer, ViewerAPI } from "react-photo-sphere-viewer";
import {
  EquirectangularAdapter,
  ExtendedPosition,
  Viewer,
} from "@photo-sphere-viewer/core";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { IImage, IMarker } from "@interfaces/IPanorama.interface";
import Address from "../address";

interface IPano {
  selectedPano: IImage;
  selectedOption: number;
  setYaw: Dispatch<SetStateAction<number>>;
}

const Pano = ({ selectedPano, selectedOption, setYaw }: IPano) => {
  const viewerRef = useRef<ViewerAPI | null>(null);
  const markersPluginRef = useRef<MarkersPlugin | null>(null);
  const navigator = useNavigate();
  const handleAddImage = (listMarker: IMarker[]) => {
    if (viewerRef.current) {
      const viewer = viewerRef.current;
      markersPluginRef.current = viewer.getPlugin(
        MarkersPlugin
      ) as MarkersPlugin;
      if (markersPluginRef.current) {
        markersPluginRef.current?.clearMarkers();

        listMarker.forEach((item, index) => {
          const markerId = `marker-${index}-${Date.now()}`;
          const startTime = performance.now();
          const duration = 1000;

          const element = document.createElement("div");
          const root = createRoot(element);
          root.render(
            <Address
              title={item.nameRoom}
              onClick={() => navigator(`#${item.nameRoom}`)}
            />
          );

          markersPluginRef.current?.addMarker({
            id: markerId,
            position: item.positions as ExtendedPosition,
            className: item.nameRoom,
            style: {
              transition: "opacity 1s ease-in-out",
            },
            anchor: "bottom center",
            opacity: 0,
            elementLayer: element,
          });

          const fadeIn = (timestamp: number) => {
            const elapsed = timestamp - startTime;
            const opacity = Math.min(1, elapsed / duration);

            markersPluginRef.current?.updateMarker({
              id: markerId,
              opacity: opacity,
            });

            if (opacity < 1) {
              requestAnimationFrame(fadeIn);
            }
          };

          requestAnimationFrame(fadeIn);
        });
      }
    }
  };

  useEffect(() => {
    handleAddImage(selectedPano.listMarker);
  }, [selectedPano]);

  const handleClick = (event: any) => {
    const { yaw, pitch } = event.data;
    console.log("Tọa độ click:", { yaw, pitch });
    console.log(event);
  };

  // Lưu yaw vào state

  const handlePositionChange = (lat: number, lng: number, instance: Viewer) => {
    console.log(lat, lng);
    const currentYaw = instance.getPosition().yaw;
    setYaw(currentYaw);
  };

  return (
    <ReactPhotoSphereViewer
      container={"viewer"}
      ref={viewerRef}
      adapter={[
        EquirectangularAdapter,
        {
          resolution: 256,
        },
      ]}
      defaultZoomLvl={50}
      maxFov={60}
      plugins={[[MarkersPlugin, {}]]}
      onPositionChange={handlePositionChange}
      width={"100%"}
      height={"100%"}
      navbar={false}
      onClick={(event) => {
        handleClick(event);
      }}
      src={
        selectedPano.options
          ? selectedPano.options[selectedOption]
          : selectedPano.src
      }
    />
  );
};

export default Pano;
