import React, { useState, useEffect } from 'react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: 0 };

export default function SnakeGame() {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const handleKeyPress = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (direction.y !== 1) setDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                    if (direction.y !== -1) setDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                    if (direction.x !== 1) setDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                    if (direction.x !== -1) setDirection({ x: 1, y: 0 });
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [direction]);

    useEffect(() => {
        if (gameOver) return;

        const moveSnake = () => {
            setSnake(prevSnake => {
                const newSnake = [...prevSnake];
                const head = { 
                    x: (newSnake[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
                    y: (newSnake[0].y + direction.y + GRID_SIZE) % GRID_SIZE
                };

                // Check collision with self
                if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
                    setGameOver(true);
                    return prevSnake;
                }

                newSnake.unshift(head);

                // Check if snake ate food
                if (head.x === food.x && head.y === food.y) {
                    setFood({ 
                        x: Math.floor(Math.random() * GRID_SIZE),
                        y: Math.floor(Math.random() * GRID_SIZE)
                    });
                    return newSnake;
                } else {
                    return newSnake.slice(1);
                }
            });
        };

        const gameInterval = setInterval(moveSnake, 200);
        return () => clearInterval(gameInterval);
    }, [direction, food.x, food.y, gameOver]);

    const getCellColor = (x, y) => {
        if (x === food.x && y === food.y)
        if (snake.some(segment => segment.x === x && segment.y === y)) return '#4CAF50';
        return '#000000';
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <h1>Snake Game</h1>
            <div 
                style={{
                    width: `${GRID_SIZE * 20}px`,
                    height: `${GRID_SIZE * 20}px`,
                    display: 'grid',
                    gridTemplateColumns: `repeat(${GRID_SIZE}, 20px)`,
                    gap: '0',
                    background: '#1a1a1a'
                }}
            >
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                    const x = index % GRID_SIZE;
                    const y = Math.floor(index / GRID_SIZE);
                    return (
                        <div
                            key={index}
                            style={{
                                width: '20px',
                                height: '20px',
                                background: getCellColor(x, y),
                            }}
                        />
                    );
                })}
            </div>
            {gameOver && <p>Game Over!</p>}
        </div>
    );
}