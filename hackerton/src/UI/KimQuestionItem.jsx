import styled from 'styled-components';

const QuestionItemCard = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`;

const QuestionItemTitle = styled.div`
    font-size: 27px;
    font-weight: bold;
`;

const QuestionItemSelectBox = styled.div`
    display: flex;
`;

const F = styled.form`
`;

const FI = styled.div`
    margin-right: 20px;
    display: inline-block;
`;

const Space = styled.div`
    height: 10px;
    width: 100%;
`;

export default function QuestionItem(props) {
    return (
      <>
        <QuestionItemCard>
            <QuestionItemTitle>{props.title}</QuestionItemTitle>
            <Space/>
            <QuestionItemSelectBox>
                <F>
                    <FI><input type='radio' name='check1' value='1'></input>1</FI>
                    <FI><input type='radio' name='check1' value='2'></input>2</FI>
                    <FI><input type='radio' name='check1' value='3'></input>3</FI>
                    <FI><input type='radio' name='check1' value='4'></input>4</FI>
                    <FI><input type='radio' name='check1' value='5'></input>5</FI>
                </F>
            </QuestionItemSelectBox>
        </QuestionItemCard>
      </>
    );
}