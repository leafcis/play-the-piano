import Keyboard from './component/Keyboard/Keyboard';

import {useState, useEffect} from 'react';

import * as S from './styled';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState([]);
  const [recordingStartAt, setRecordingStartAt] = useState(0);

  useEffect(() => {
    if (isRecording) {
      setRecording([]);
      setRecordingStartAt(new Date());
    }
  }, [isRecording])

  const keyboard = [{
    sound: 'c',
    isExistBlack: true
  },
  {
    sound: 'd',
    isExistBlack: true
  },
  {
    sound: 'e',
    isExistBlack: false
  },
  {
    sound: 'f',
    isExistBlack: true
  },
  {
    sound: 'g',
    isExistBlack: true
  },
  {
    sound: 'a',
    isExistBlack: true
  },
  {
    sound: 'b',
    isExistBlack: false
  }]

  const handleRecording = () => {
    setIsRecording(prev => !prev);
  }

  const handlePlaying = () => {
    recording.forEach(({sound, octave, playAt}) => {
      setTimeout(() => {
        const audio = new Audio(`./media/${sound}${octave}.mp3`);
        audio.play();
      }, playAt)
    })
  }

  const recordKeyBoard = (sound, octave, isBlack) => {
    if (isRecording) {
      setRecording(prev => [...prev, {
        sound: isBlack ? `${sound}-` : sound,
        octave,
        playAt: new Date() - recordingStartAt
      }]);
    }
  }

  const keyboardList = [...keyboard, ...keyboard, ...keyboard].map(({isExistBlack, sound}, idx) => {
    const octave = Math.floor(idx / 7) + 3;
    
    return (
      <Keyboard 
        sound={sound}
        octave={octave}
        isExistBlack={isExistBlack} 
        record={recordKeyBoard}
      />
    )
  })

  return (
    <S.Wrapper>
      <S.Header>
        Play the Piano!
      </S.Header>
      <S.PlayerWrapper>
        <S.Recording 
          isRecording={isRecording}
          onClick={handleRecording}
        >
          {
            isRecording ? '■' : '●' 
          }
        </S.Recording>
        <S.Play onClick={handlePlaying}>▶</S.Play>
      </S.PlayerWrapper>
      <S.KeyBoardWrapper>
        {keyboardList}
      </S.KeyBoardWrapper>
    </S.Wrapper>
  );
}

export default App;
