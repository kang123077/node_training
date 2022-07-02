import React from "react";
import { useRecoilState } from "recoil";

const GlobalModal = () => {
    const { modalType, modalProps } = useRecoilState(modalState)[0] || {};
}