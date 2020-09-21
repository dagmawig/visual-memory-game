import React from 'react'
import Blue from '../images/blue.png'
import White from '../images/white.png'
import X from '../images/x.png'


// Generates the a single tile
function Tile({ width, cardArr, index, disabled, handleClick, freeze }) {
    if (cardArr[index] === 'Blue')
        return (
            <button type='button' id={index} className='btn tile-btn' disabled={(freeze) ? !disabled : disabled} onClick={handleClick}>
                <img alt='Blue' src={Blue} width={width} height={width} className='tile' />
            </button>

        )
    else if (cardArr[index] === 'White')
        return (
            <button type='button' id={index} className='btn tile-btn' disabled={true} onClick={handleClick}>
                <img alt='White' src={White} width={width} height={width} className='tile' />
            </button>

        )
    else
        return (
            <button type='button' id={index} className='btn tile-btn' disabled={true} onClick={handleClick}>
                <img alt='X  ' src={X} width={width} height={width} className='tile' />
            </button>

        )
}


// Generates a set of tiles
function Tiles({ size, cardArr, disabled, handleClick, freeze }) {

    if (size === 3) {
        return (
            <div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={0} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={1} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={2} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={3} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={4} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={5} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={6} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={7} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={8} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
            </div>
        )
    }

    else if (size === 4) {
        return (
            <div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={0} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={1} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={2} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={3} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={4} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={5} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={6} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={7} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={8} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={9} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={10} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={11} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={12} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={13} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={14} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={15} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
            </div>
        )
    }

    else if (size === 5) {
        return (
            <div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={0} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={1} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={2} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={3} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={4} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={5} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={6} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={7} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={8} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={9} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={10} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={11} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={12} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={13} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={14} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={15} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={16} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={17} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={18} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={19} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
                <div className='row justify-content-center'>
                    <Tile width={50} cardArr={cardArr} index={20} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={21} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={22} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={23} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                    <Tile width={50} cardArr={cardArr} index={24} disabled={disabled} handleClick={handleClick} freeze={freeze} />
                </div>
            </div>
        )
    }

}

export default Tiles