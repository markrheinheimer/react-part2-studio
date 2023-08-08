import ClickedButton from './ClickedButton';
import SaveButton from './SaveButton';

function Button(props) {
  const saveButton = props.saveButton;
  if (saveButton) {
    return <SaveButton />;
  } else {
    return <ClickedButton />;
  }
}

export default Button;

//need to import SaveButton and ClickedButton
//create conditional for these buttons
//import styling
