export default function (state="", action) {
	switch (action.type) {
		case "MOUSE_OVER_SH":
			return action.payload;
				break;
				case "MOUSE_OUT_SH":
			return state="";
			break;
		default:
		return state;
	}
}