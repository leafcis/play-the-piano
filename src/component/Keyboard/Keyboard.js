import * as S from './styled';

const Keyboard = ({isExistBlack, sound, octave, record}) => {
  const handleClickKeyboard = (sound, octave, isBlack) => () => {
    const audio = new Audio(`./media/${sound}${octave}.mp3`);
    audio.play();
    record(sound, octave, isBlack);
  };

  return (
    <S.SoundWrapper isExistBlack={isExistBlack}>
      {isExistBlack ? 
        <>
          <S.White onClick={handleClickKeyboard(sound, octave, false)}/>
          <S.Black onClick={handleClickKeyboard(`${sound}-`, octave, true)}/>
        </>
        :
        <S.White onClick={handleClickKeyboard(sound, octave, false)}/>
      }
    </S.SoundWrapper>
  )
}

export default Keyboard;