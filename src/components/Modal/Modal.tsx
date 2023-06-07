// Source: https://tailwindui.com/components/application-ui/overlays/modals

import { FC, PropsWithChildren } from 'react';
import { MdClose } from 'react-icons/md';

export type ModalProps = {
  theme: 'light' | 'dark';
  isOpen: boolean;
  onClose: () => void;
};

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  theme = 'light',
  isOpen = false,
  onClose = () => {},
}) => (
  <div
    className={`relative z-10 ${!isOpen && 'pointer-events-none'}`}
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      className={`
          ${isOpen ? 'opacity-100' : 'opacity-0'} 
          fixed inset-0 bg-custom-blue-500 bg-opacity-75 transition-opacity`}
    ></div>

    <div className="fixed inset-0 z-10 overflow-y-auto" onClick={onClose}>
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
              ${
                isOpen
                  ? 'opacity-100 translate-y-0 sm:scale-100'
                  : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              } 
              ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}
              relative overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}
        >
          <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">{children}</div>

            <a href="#" onClick={onClose} className="absolute top-5 right-3">
              <MdClose size={24} color="lightgray" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
