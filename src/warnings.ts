import filterConsole from "filter-console";

// This is needed until the Overlay implementation is updated
// See more at https://github.com/react-bootstrap/react-bootstrap/issues/5519
const TRANSITION_ERROR = /Warning: findDOMNode is deprecated in StrictMode.*Transition/s;

filterConsole([TRANSITION_ERROR]);
