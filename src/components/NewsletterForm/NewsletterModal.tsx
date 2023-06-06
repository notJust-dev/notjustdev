import NewsletterForm from './NewsletterForm';
import Modal from '../Modal/Modal';

export type NewsletterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function NewsletterModal(props: NewsletterModalProps) {
  return (
    <Modal {...props} theme="dark">
      <NewsletterForm />
    </Modal>
  );
}

export default NewsletterModal;
