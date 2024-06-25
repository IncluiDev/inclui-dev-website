// src/component/MazeBoard.jsx
import { useState, useEffect, useRef } from 'react';
import './style.css';
import playerImg from '../../assets/player.png';
import backgroundMusic from '../../assets/background-music.mp3'; 

const mazes = [
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', 'E', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', '#', ' ', '#', '#', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', ' ', '#', ' ', '#', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', '#', ' ', '#', '#'],
    ['#', ' ', '#', ' ', '#', ' ', '#', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', ' ', '#', ' ', '#'],
    ['#', ' ', ' ', '#', ' ', '#', ' ', ' ', ' ', 'S'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
  ],
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', 'E', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', ' ', '#', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', '#', '#', '#', ' ', '#', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', ' ', '#', ' ', '#', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', ' ', '#', ' ', 'S'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
  ],
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', 'E', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#', '#', ' ', '#'],
    ['#', ' ', '#', '#', '#', ' ', '#', ' ', ' ', '#'],
    ['#', '#', '#', '#', ' ', ' ', ' ', ' ', '#', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', ' ', '#', '#', '#', ' ', '#', ' ', '#', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ', 'S'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
  ],
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', 'E', ' ', '#', '#', '#', '#', ' ', ' ', '#'],
    ['#', '#', ' ', '#', ' ', ' ', ' ', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', '#', ' ', '#', ' ', '#'],
    ['#', ' ', '#', '#', ' ', '#', ' ', '#', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', '#', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#', '#', ' ', '#'],
    ['#', '#', '#', '#', '#', '#', '#', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', 'S'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
  ],
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', 'E', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', '#', '#', '#', '#', '#', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', ' ', '#', ' ', '#'],
    ['#', ' ', '#', ' ', '#', '#', ' ', '#', ' ', '#'],
    ['#', ' ', '#', ' ', '#', ' ', ' ', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', '#', '#', ' ', '#'],
    ['#', '#', '#', '#', '#', ' ', '#', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
  ]
];

const MazeRunnerPage = () => {
  const [maze, setMaze] = useState(mazes[0]);
  const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 1 });
  const [gameMessage, setGameMessage] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [levelSelectOpen, setLevelSelectOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('Maze Runner');
  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar se a música está tocando
  const [volume, setVolume] = useState(50); // Estado para controlar o volume da música

  // Referência para o elemento de áudio
  const audioRef = useRef(new Audio(backgroundMusic));

  // Efeito para iniciar a reprodução da música quando o componente montar
  useEffect(() => {
    audioRef.current.loop = true; // Define a música para tocar em loop
    audioRef.current.volume = volume / 100; // Ajusta o volume conforme o estado
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error('Erro ao reproduzir a música:', error);
      });
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause(); // Pausa a música quando o componente desmontar
    };
  }, [isPlaying, volume]); // Dependências: isPlaying e volume

  // Função para ajustar o volume para cima
  const volumeUp = () => {
    if (volume < 100) {
      setVolume(volume + 10);
    }
  };

  // Função para ajustar o volume para baixo
  const volumeDown = () => {
    if (volume > 0) {
      setVolume(volume - 10);
    }
  };

  // Função para dar play na música
  const playMusic = () => {
    setIsPlaying(true);
  };

  // Função para pausar a música
  const pauseMusic = () => {
    setIsPlaying(false);
  };

  // Função para obter uma classe de cor aleatória para as paredes
  const getWallClass = () => {
    const classes = ['wall-color-1', 'wall-color-2', 'wall-color-3', 'wall-color-4'];
    return classes[Math.floor(Math.random() * classes.length)];
  };

  // Função para resetar o jogo
  const resetGame = () => {
    setMaze(mazes[currentPhase]);
    setPlayerPosition({ x: 1, y: 1 });
    setGameMessage('');
    closeMenu();
  };

  // Função para pular de fase
  const skipLevel = () => {
    if (currentPhase < mazes.length - 1) {
      setGameMessage('Você pulou de fase!');
      setTimeout(() => {
        setMaze(mazes[currentPhase + 1]);
        setPlayerPosition({ x: 1, y: 1 });
        setCurrentPhase(currentPhase + 1);
        setGameMessage('');
        setPageTitle(`Maze Runner - Fase ${currentPhase + 2}`);
        closeMenu();
      }, 5000);
    } else {
      setGameMessage('Você já está na última fase!');
    }
  };

  // Função para selecionar uma fase específica
  const selectLevel = (levelIndex) => {
    setMaze(mazes[levelIndex]);
    setPlayerPosition({ x: 1, y: 1 });
    setCurrentPhase(levelIndex);
    setGameMessage('');
    setPageTitle(`Maze Runner - Fase ${levelIndex + 1}`);
    closeLevelSelect();
  };

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para abrir o seletor de níveis
  const openLevelSelect = () => {
    setLevelSelectOpen(true);
    closeMenu();
  };

  // Função para fechar o menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Função para fechar o seletor de níveis
  const closeLevelSelect = () => {
    setLevelSelectOpen(false);
  };

  // Efeito para capturar as teclas pressionadas
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (gameMessage) return;

      const { x, y } = playerPosition;
      let newX = x;
      let newY = y;

      if (event.key === 'ArrowUp') {
        newX = x - 1;
      } else if (event.key === 'ArrowDown') {
        newX = x + 1;
      } else if (event.key === 'ArrowLeft') {
        newY = y - 1;
      } else if (event.key === 'ArrowRight') {
        newY = y + 1;
      }

      if (maze[newX][newY] === ' ') {
        setPlayerPosition({ x: newX, y: newY });
      } else if (maze[newX][newY] === 'S') {
        setPlayerPosition({ x: newX, y: newY });
        if (currentPhase < mazes.length - 1) {
          setGameMessage('Você conseguiu passar de fase!');
          setMenuOpen(true);
          setTimeout(() => {
            setMaze(mazes[currentPhase + 1]);
            setPlayerPosition({ x: 1, y: 1 });
            setCurrentPhase(currentPhase + 1);
            setPageTitle(`Maze Runner - Fase ${currentPhase + 2}`);
            setGameMessage('');
            closeMenu();
          }, 5000);
        } else {
          setGameMessage('Você completou todas as fases!');
          setMenuOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [playerPosition, maze, gameMessage, currentPhase]);

  // Renderização do componente
  return (
    <main className='main-mazerruner'>
        <div className="maze-container">
        <h1>{pageTitle}</h1>
        <div className="maze-board">
            {maze.map((row, rowIndex) => (
            <div key={rowIndex} className="maze-row">
                {row.map((cell, cellIndex) => (
                <div
                    key={cellIndex}
                    className={`maze-cell ${cell === '#' ? getWallClass() : ''} ${playerPosition.x === rowIndex && playerPosition.y === cellIndex ? 'player' : ''}`}
                >
                    {playerPosition.x === rowIndex && playerPosition.y === cellIndex ? (
                    <img src={playerImg} alt="player" className="player-img" />
                    ) : cell === 'E' || cell === 'S' ? cell : null}
                </div>
                ))}
            </div>
            ))}
        </div>
        <div className="music-controls">
            <button className="play-button" onClick={playMusic}>Play</button>
            <button className="pause-button" onClick={pauseMusic}>Pause</button>
            <button className="volume-up-button" onClick={volumeUp}>Volume +</button>
            <button className="volume-down-button" onClick={volumeDown}>Volume -</button>
        </div>
        {menuOpen && (
            <div className="menu-overlay">
            <div className="menu">
                <p className="menu-message">{gameMessage}</p>
                <button className="menu-button" onClick={resetGame}>Resetar Fase</button>
                <button className="menu-button" onClick={skipLevel}>Pular Fase</button>
                <button className="menu-button" onClick={openLevelSelect}>Selecionar Fase</button>
                <button className="close-button" onClick={closeMenu}>Fechar</button>
            </div>
            </div>
        )}
        {levelSelectOpen && (
            <div className="menu-overlay">
            <div className="menu">
                <p className="menu-message">Selecione uma Fase</p>
                {mazes.map((_, index) => (
                <button
                    key={index}
                    className="menu-button level-select-button"
                    onClick={() => selectLevel(index)}
                >
                    Fase {index + 1}
                </button>
                ))}
                <button className="close-button" onClick={closeLevelSelect}>Fechar</button>
            </div>
            </div>
        )}
        <button className="menu-button toggle-menu" onClick={toggleMenu}>Menu</button>
        </div>
    </main>
  );
};

export default MazeRunnerPage;