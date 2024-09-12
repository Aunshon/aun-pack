import {createSlotFill} from "@wordpress/components";
const KEY = 'aun-main-slot-display';
const { Slot, Fill } = createSlotFill(KEY);

const AunDisplayContact = (props) => {

  return (
    <Fill>
      {props.children}
    </Fill>
  );
}

AunDisplayContact.Slot = Slot;

export default AunDisplayContact;
