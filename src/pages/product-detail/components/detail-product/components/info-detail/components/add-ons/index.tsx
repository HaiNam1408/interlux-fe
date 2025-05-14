import { Stack, Text } from "@chakra-ui/react";
import CheckBox from "@components/check-box";
import { listAddOns } from "@constants/listFakeData";
import { Dispatch, SetStateAction } from "react";

interface IAddOns {
  setSelected: Dispatch<SetStateAction<Record<string, boolean>>>;
  selected: Record<string, boolean>;
}

const AddOns = ({ selected, setSelected }: IAddOns) => {
  const handleChange = (label: string, checked: boolean) => {
    setSelected((prev) => ({ ...prev, [label]: checked }));
  };

  return (
    <Stack direction="column" gap="1rem" my="2rem">
      <Text fontSize="1.6rem" color="#fff">
        <strong>Add-Ons:</strong>
      </Text>
      <Stack direction="column" gap="1rem">
        {listAddOns.map((item) => (
          <CheckBox
            key={item}
            label={item}
            checked={selected[item] || false}
            onChange={(checked) => handleChange(item, checked)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default AddOns;
