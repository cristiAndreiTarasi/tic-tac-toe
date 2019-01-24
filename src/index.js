const tiles = document.getElementById('board').children;
    const xArr = ['X'], oArr = ['O'];
    const x = 'X';
    const o = 'O';
    for(let tile = 0; tile < tiles.length; tile++) {
        const loopThroughTiles = (evt) => {
            //if the length of one array is higher or equal to the other one switch the result
            if(xArr.length === oArr.length && evt.target.innerText === '') {
                evt.target.innerText = 'X';
                evt.target.style.color = 'red';
                xArr.push(tile);
            }else if(xArr.length > oArr.length && evt.target.innerText === '') {
                evt.target.innerText = 'O';
                evt.target.style.color = 'blue';
                oArr.push(tile);
            }
            //check for same value in boxes to define winner
            if(tiles[0].innerText === 'X' && tiles[1].innerText === 'X' && tiles[2].innerText === 'X') {
                alert('X WOON')
                window.location.reload();
            }
            else if(tiles[3].innerText === 'X' && tiles[4].innerText === 'X' && tiles[5].innerText === 'X') {
                alert('X WOON');
                window.location.reload();
            }
            else if(tiles[6].innerText === 'X' && tiles[7].innerText === 'X' && tiles[8].innerText === 'X') {
                alert('X WOON');
                window.location.reload();
            }
            else if(tiles[0].innerText === 'X' && tiles[3].innerText === 'X' && tiles[6].innerText === 'X') {
                alert('X WOON');
                window.location.reload();
            }
            else if(tiles[1].innerText === 'X' && tiles[4].innerText === 'X' && tiles[7].innerText === 'X') {
                alert('X WOON');
                window.location.reload();
            }
            else if(tiles[2].innerText === 'X' && tiles[5].innerText === 'X' && tiles[8].innerText === 'X') {
                alert('X WOON');
                window.location.reload();
            }
            else if(tiles[0].innerText === 'X' && tiles[4].innerText === 'X' && tiles[8].innerText === 'X') {
                alert('X WOON');
                window.location.reload();
            }
            else if(tiles[2].innerText === 'X' && tiles[4].innerText === 'X' && tiles[6].innerText === 'X') {
                alert('X WOON');
                window.location.reload();
            }
            if(tiles[0].innerText === 'O' && tiles[1].innerText === 'O' && tiles[2].innerText === 'O') {
                alert('O WOON');
                window.location.reload();
            }
            else if(tiles[3].innerText === 'O' && tiles[4].innerText === 'O' && tiles[5].innerText === 'O') {
                alert('O WOON');
                window.location.reload();
            }
            else if(tiles[6].innerText === 'O' && tiles[7].innerText === 'O' && tiles[8].innerText === 'O') {
                alert('O WOON');
                window.location.reload();
            }
            else if(tiles[0].innerText === 'O' && tiles[3].innerText === 'O' && tiles[6].innerText === 'O') {
                alert('O WOON');
                window.location.reload();
            }
            else if(tiles[1].innerText === 'O' && tiles[4].innerText === 'O' && tiles[7].innerText === 'O') {
                alert('O WOON');
                window.location.reload();
            }
            else if(tiles[2].innerText === 'O' && tiles[5].innerText === 'O' && tiles[8].innerText === 'O') {
                alert('O WOON');
                window.location.reload();
            }
            else if(tiles[0].innerText === 'O' && tiles[4].innerText === 'O' && tiles[8].innerText === 'O') {
                alert('O WOON');
                window.location.reload();
            }
            else if(tiles[2].innerText === 'O' && tiles[4].innerText === 'O' && tiles[6].innerText === 'O') {
                alert('O WOON');
                window.location.reload();
            }
        };
        //Attach event listener to each div
        tiles[tile].addEventListener('click', loopThroughTiles, false);
