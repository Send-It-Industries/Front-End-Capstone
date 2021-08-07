/* eslint-disable linebreak-style */
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const portalRoot = document.getElementById('portal-root');

const Background = styled.div`
    width: 50vw;
    height: 80vh;
    max-height: 800px;
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 5vh;
    left; 0
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const Content = styled.div`
    width: 50vw;
    height: 80vh;
    max-height: 80vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    overflowY: scroll;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.2);
    position: relative;
    `;

const HeaderRow = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

// const ScrollDisabler = createGlobalStyle`
//   body {
//     overflow-y: hidden;
//   }
// `;

const ReviewModal = ({ isOpen, close, children }) => {
  const contentRef = useRef();

  useEffect(() => {
    if (!isOpen) return;

    function listener(evt) {
      if (!evt.target || !contentRef.current) { close(); return; }
      if (contentRef.current.contains(evt.target)) return;
      close();
    }

    window.addEventListener('click', listener);

    return () => {
      window.removeEventListener('click', listener);
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div style={{
      display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '600px',
    }}
    >
      <Background>
        <Content ref={contentRef}>
          <HeaderRow>
            {/* <img
                src={closeIcon}
                alt=""
                width="30px"
                style={{ cursor: "pointer" }}
                onClick={close}
              /> */}
          </HeaderRow>
          {children}
        </Content>
      </Background>
      {/* <ScrollDisabler /> */}
    </div>,
    portalRoot,
  );
};

export default ReviewModal;
