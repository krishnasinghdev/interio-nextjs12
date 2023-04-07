import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { wrapper } from "../context/store";
import {
  showSidebar,
  sidebar,
  setLogin,
  modalFor as MF,
  showModal as SM,
  toggleModal,
} from "../context/theme";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../components/Modal";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const navbar = useSelector(sidebar);
  const modalFor = useSelector(MF);
  const showModal = useSelector(SM);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(
        setLogin({
          vendor: localStorage.getItem("vendor"),
          v_id: localStorage.getItem("v_id"),
          token: localStorage.getItem("token"),
        })
      );
    }
    const width = window.innerHeight;
    if (width >= 900) () => dispatch(showSidebar());
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Interio</title>
      </Head>
      {showModal && (
        <Modal
          onClick={() =>
            dispatch(toggleModal({ showModal: false, modalType: "" }))
          }
          component={modalFor}
        />
      )}
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
