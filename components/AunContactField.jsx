import {createSlotFill} from "@wordpress/components";
const KEY = 'aun-main-slot-container';
const { Slot, Fill } = createSlotFill(KEY);

const AunContactField = (props) => {

	return (
		<Fill>
			{props.children}
		</Fill>
	);
}

AunContactField.Slot = Slot;

export default AunContactField;
