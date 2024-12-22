// components/ActionButtons.tsx
import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

interface ActionButtonsProps {
  onSubmit: () => void;
  onClear: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onSubmit, onClear }) => (
  <div className="buttonsContainer">
    <IconButton onClick={onSubmit} aria-label="submit" className="iconButton">
      <SendIcon />
    </IconButton>
    <IconButton onClick={onClear} aria-label="clear" className="iconButton">
      <ClearIcon />
    </IconButton>
  </div>
);

export default ActionButtons;
