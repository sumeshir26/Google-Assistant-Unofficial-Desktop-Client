import React from 'react';
import { ReactSVGElement } from 'renderer/utils/types';
import './IconButton.scss';

export interface IconButtonProps {
  /**
   * Icon for the IconButton
   */
  Icon: ReactSVGElement;

  /**
   * Label associated with the IconButton. Used
   * for accessibility reasons
   */
  label: string;

  /**
   * Callback triggered when the IconButton is clicked
   */
  onClick: () => void;

  /**
   * Controls whether the `label` should be displayed as
   * a tooltip.
   */
  showTooltips?: boolean;
}

/**
 * Implements and renders title bar action element
 */
function IconButton({
  Icon,
  label,
  onClick,
  showTooltips = true,
}: IconButtonProps) {
  return (
    <button
      className="icon-button"
      type="button"
      title={showTooltips ? label : ''}
      aria-label={!showTooltips ? label : ''}
      onClick={onClick}
    >
      <Icon />
    </button>
  );
}

export default IconButton;
