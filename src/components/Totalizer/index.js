import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {showModal} from '../../store/ModalStore';
import ModalRate from '../ModalRate';
import {
  TotalizerContainer,
  Available,
  Container,
  Text,
  Price,
  Economy,
} from './styles';
import {useSelector} from 'react-redux';

export const CalcTotalizer = (products) => {
  console.log(products);
  const total = products
    .filter((i) => i.check)
    .map((i) => i.price * i.quantity)
    .reduce((sum, current) => sum + current, 0);
  return total;
};

const modalRate = <ModalRate />;

const PaperListItem = () => {
  const dispatch = useDispatch();
  const selectedList = useSelector((state) => state.listStore.selectedList);
  const isRated = useSelector((state) => state.ratingStore.rated);

  const total = CalcTotalizer(selectedList.products);
  const available = selectedList.available ?? 0;

  useEffect(() => {
    console.log('isRated', isRated);
    const totalChecks = selectedList.products.filter((i) => i.check).length;
    if (!isRated && totalChecks == 3) dispatch(showModal(true, modalRate));
  }, [selectedList, isRated]);

  return (
    <Container>
      <TotalizerContainer>
        <Text>Disponivel: </Text>
        <Available>R$ {available ? available.toFixed(2) : '-'}</Available>
      </TotalizerContainer>
      <TotalizerContainer>
        <Text>Balanço: </Text>
        {available >= total ? (
          <Economy>
            R$ {available ? (available - total).toFixed(2) : '-'}
          </Economy>
        ) : (
          <Price>R$ {(available - total).toFixed(2)}</Price>
        )}
      </TotalizerContainer>
      <TotalizerContainer>
        <Text>Total: </Text>
        <Price>R$ {total ? total.toFixed(2) : '-'}</Price>
      </TotalizerContainer>
    </Container>
  );
};

export default PaperListItem;
