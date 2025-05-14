import { Grid, GridItem } from "@chakra-ui/react";
import DropDownCustom from "@components/dropdow-custom";
import InputCustom from "@components/input-custom";
import SlideCustom from "@components/slide-custom";
import { useState } from "react";

const FilterContent = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [value, setValue] = useState<[number, number]>([0, 400]);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={"2rem"} width={"100%"}>
      <GridItem colSpan={1}>
        <InputCustom
          colorLabel="#fff"
          setValue={setSearch}
          value={search}
          placeholder="Search"
        />
      </GridItem>
      <GridItem colSpan={1}>
        <DropDownCustom
          label="Category"
          labelSearch="Filter category"
          listDropdown={["1", "2", "3"]}
          setSelectedItem={setCategory}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <DropDownCustom
          label="Color"
          labelSearch="Filter color"
          listDropdown={[
            "All Colors",
            "beige",
            "black",
            "blue",
            "brown",
            "burgundy",
            "cream",
            "doucolor",
            "golden",
            "green",
            "grey/Cement",
            "himalayan",
            "navy",
            "orange",
            "pink",
            "purple",
            "red",
            "silver",
            "tricolor",
            "turquoise",
            "white",
            "yellow",
          ]}
          setSelectedItem={setCategory}
          type="color"
        />
      </GridItem>
      <GridItem colSpan={1}>
        <SlideCustom
          label="Price Range"
          max={400}
          min={0}
          setValue={setValue}
          value={value}
        />
      </GridItem>
    </Grid>
  );
};

export default FilterContent;
