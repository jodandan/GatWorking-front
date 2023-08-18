import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  /* 모달 스타일을 여기에 추가하세요 */
`;

const ProfileModal = ({ profileData, onClose }) => {
  return (
    <ModalContainer>
      {/* 프로필 정보를 표시합니다 */}
      {/* profileData prop을 사용하여 모달에 데이터를 채울 수 있습니다 */}
      {/* 모달을 닫는 닫기 버튼이나 오버레이를 추가하세요 */}
    </ModalContainer>
  );
};

export default ProfileModal;
