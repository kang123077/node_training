import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ModalCloseButton from "./ModalCloseButton";
import axios from "axios";

const Modal = ({
  onClose,
  maskClosable,
  visible,
  children,
  password,
  title,
  content,
  nickName,
}) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  const Post = () => {
    axios({
      method: "POST",
      url: "http://124.197.210.234:8188/bulletin",
      data: {
        password: password,
        title: title,
        content: content,
        nickname: nickName,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    location.href = "http://localhost:3000/forum";
  };

  console.log(nickName, title, password, content);

  return (
    <div>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {children}
          <ModalButtonWrapper>
            <ModalButton onClick={close}>취소</ModalButton>
            <ModalButton onClick={Post}>확인</ModalButton>
          </ModalButtonWrapper>
          <ModalCloseButtonWrapper onClick={close}>
            <ModalCloseButton />
          </ModalCloseButtonWrapper>
        </ModalInner>
      </ModalWrapper>
    </div>
  );
};

Modal.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
};

Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 60vw;
  height: 180px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  background: #ffffff;
  border: 1px solid #9381dd;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.35);
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
`;

const ModalButton = styled.button`
  width: 108px;
  height: 40px;
  font-size: 14px;
  background: #f6f8ff;
  border: 1px solid #9381dd;
  box-shadow: 2px 2px 4px rgba(116, 116, 116, 0.25);
  border-radius: 100px;
  margin-top: 30px;

  &:active,
  &:hover,
  &:focus {
    cursor: pointer;
    background: #494949;
    color: white;
  }
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 6vw;
`;

const ModalCloseButtonWrapper = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 16px;
  cursor: pointer;
`;

export default Modal;
