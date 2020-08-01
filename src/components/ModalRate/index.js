import React from 'react';
import {useDispatch} from 'react-redux';
import Rate, {AndroidMarket} from 'react-native-rate';
import createList from '../../../assets/images/rate.png';
import {setRated} from '../../store/RatingStore';
import {showModal} from '../../store/ModalStore';
import {
  Container,
  ModalTitle,
  ModelSubTitle,
  ModalTitleContainer,
  AddButtonContainer,
  ButtonContainer,
  AddButtonIcon,
} from './styles';

function ModalRate() {
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <ModalTitleContainer>
          <ModalTitle> Gostando do app? </ModalTitle>
        </ModalTitleContainer>
        <ButtonContainer enable={true}>
          <AddButtonContainer
            disabled={!true}
            onPress={() => {
              const options = {
                GooglePackageName: 'br.com.dreamteamapps.listadecompras',
                preferredAndroidMarket: AndroidMarket.Google,
              };
              Rate.rate(options, (success) => {
                console.log("success",success);
                if (success) {
                  console.log('setting rated');
                  dispatch(setRated());
                }
                dispatch(showModal(false));
              });
            }}>
            <AddButtonIcon source={createList} resizeMode="contain" />
          </AddButtonContainer>
          <ModelSubTitle>Queremos sua opinião</ModelSubTitle>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModalRate;
