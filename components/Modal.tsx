import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal, modalFor as MF } from "../context/theme";
import Invite from "./Invite";
import NewCollection from "./NewCollection";
import Signin from "./Signin";
import Signup from "./Signup";
import EditPassword from "./EditPassword";

interface PortalProps {
  component: String;
  onClick: () => void;
}
const Modal = ({ component, onClick }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const dispatch = useDispatch();
  const modalFor = useSelector(MF);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <dialog className="overlay z-10">
          {modalFor === "signup" && (
            <Signup
              onClick={() =>
                dispatch(toggleModal({ showModal: false, modalType: "" }))
              }
            />
          )}
          {modalFor === "signin" && (
            <Signin
              onClick={() =>
                dispatch(toggleModal({ showModal: false, modalType: "" }))
              }
            />
          )}
          {modalFor === "invite" && (
            <Invite
              onClick={() =>
                dispatch(toggleModal({ showModal: false, modalType: "" }))
              }
            />
          )}
          {modalFor === "collection" && (
            <NewCollection
              onClick={() =>
                dispatch(toggleModal({ showModal: false, modalType: "" }))
              }
            />
          )}
          {modalFor === "edit-password" && (
            <EditPassword
              onClick={() =>
                dispatch(toggleModal({ showModal: false, modalType: "" }))
              }
            />
          )}
        </dialog>,
        ref.current
      )
    : null;
};

export default Modal;
