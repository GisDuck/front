import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import StartGame from './game/main';
import { EventBus } from './game/EventBus';

export const FarmGame = forwardRef(function FarmGame ({ currentActiveScene }, ref)
{
    const game = useRef();

    // Create the game inside a useLayoutEffect hook to avoid the game being created outside the DOM
    useLayoutEffect(() => {
        
        if (game.current === undefined)
        {
            game.current = StartGame("game-container");
            
            if (ref !== null)
            {
                ref.current = { game: game.current, scene: null };
            }
        }

        return () => {

            if (game.current)
            {
                game.current.destroy(true);
                game.current = undefined;
            }

        }
    }, [ref]);

    useEffect(() => {
        const handler = (currentScene) => {
            if (currentActiveScene instanceof Function) {
                currentActiveScene(currentScene);
            }
            ref.current.scene = currentScene;
        };
    
        EventBus.on('current-scene-ready', handler);
    
        return () => {
            EventBus.off('current-scene-ready', handler);
        };
    }, [currentActiveScene, ref]);
    

    return (
        <div id="game-container"></div>
    );

});




