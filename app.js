document.addEventListener("DOMContentLoaded", () => {

    const grid =document.querySelector('.grid')
    const infoGrid =document.querySelector('.mini-grid')
    const timeLeft = document.querySelector('#time-left')
    const result = document.querySelector('#result')
    const startBtn = document.querySelector('#button')
    const width = 9 // 9 * 16 = 144 (143 because of 0) // needed for loop
    const height = 16
    const squares = [] // squares array used to hold createBoard() for use by other fucntions. This is apposed to just making 143 divs in hatm and useing     //    const squares = document.querySelectorAll('.grid div')
    const infoSquares = []

    let currentBallotBoxIndex = 4
    let voterQue = 5
    let fireLane = 27
    let hurricaneLaneIndex = 36
    let hurricaneEyeIndex = 40
    let currentPostBoxIndex = 54
    let policeLane = 108
    let policeLaneRight = 116

    let road = 108
    let angryPink1 = 84
    let angryPink2 = 85
    let angryPink3 = 89
    let angryPinkR1 = 90
    let angryPinkR2 = 94
    let angryPinkR3 = 95

    let currentPlayerIndex = 139//103//77//139
    let startingBlock = [0]
    let startingBlockIndex = 139
    let currentTime = 60
    let timerId


    let voterQueBoxes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let fireLaneBoxes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let hurricaneLaneBoxes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let hurricaneEyeBox = [0]
    let ballotBox = [0]
    let postBoxes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    let angryPinks = [0]
    let policeCarboxes = [0, 3, 6 ]
    let policeLaneBoxes = [0, 1, 2, 3, 4, 5, 6, 7]
    let policeLaneBoxesRight = [0, 1, 2, 3, 4, 5, 6]


    //draw grid 
    function createBoard(){
        for(let i = 0; i < width*height; i++){ // hight couls also be width * 18 or any number (9*18=144 grid)
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)
       }
      // could go here  postBoxes.forEach(postBox => squares[currentPostBoxIndex + postBox].classList.add('post'))

    }
    createBoard() // ould move to start button

    function createInfoBoard(){
        for(let i = 0; i < 1*height; i++){ // hight couls also be width * 18 or any number (9*18=144 grid)
            const infoSquare = document.createElement('div')
            infoGrid.appendChild(infoSquare)
            infoSquares.push(infoSquare)
       }

    }
    createInfoBoard()
    let infoBars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    let startText = 14
    let roadText = 12
    let protestersText = 9
    let postText = 6
    let stormText = 4
    let forstText = 3
    let queText = 2
    let ballotText = 1

    function infoGuides(){
 
        if(currentPlayerIndex >=63 && currentPlayerIndex <71){
            // grid.classList.add('win')
            infoSquares[stormText].classList.add('storm-guide')
            setTimeout(hide, 1000);
        } else if (currentPlayerIndex >=54 && currentPlayerIndex <62){
            hide()
        }
    }
    function hide(){
        infoSquares[protestersText].classList.remove('pinks-guide')
        infoSquares[postText].classList.remove('post-guide')



        infoSquares[roadText].classList.remove('police-guide')

        infoSquares[startText].classList.remove('starting-block-guide')
        infoSquares[stormText].classList.remove('storm-guide')



    }
    //draw post boxes outside of draw funtion
    postBoxes.forEach(postBox => squares[currentPostBoxIndex + postBox].classList.add('post'))

    //start button goes here 
    function undraw(){
        hurricaneEyeBox.forEach(eye => squares[hurricaneEyeIndex + eye].classList.remove('eye'))
        angryPinks.forEach(person => squares[angryPink1 + person].classList.remove('angry-pinks'))
        angryPinks.forEach(person => squares[angryPink2 + person].classList.remove('angry-pinks'))
        angryPinks.forEach(person => squares[angryPink3 + person].classList.remove('angry-pinks'))
        angryPinks.forEach(person => squares[angryPinkR1 + person].classList.remove('angry-pinks'))
        angryPinks.forEach(person => squares[angryPinkR2 + person].classList.remove('angry-pinks'))
        angryPinks.forEach(person => squares[angryPinkR3 + person].classList.remove('angry-pinks'))
        policeCarboxes.forEach(car => squares[policeLane + car].classList.remove('police-car'))
        policeCarboxes.forEach(car => squares[policeLane + car].classList.remove('police-car-red'))
        policeCarboxes.forEach(car => squares[policeLaneRight + car].classList.remove('police-car-right'))   
        policeCarboxes.forEach(car => squares[policeLaneRight + car].classList.remove('police-car-red-right'))
    }
    undraw()

    function draw(){
        ballotBox.forEach(bBox => squares[currentBallotBoxIndex + bBox].classList.add('ballot'))
        fireLaneBoxes.forEach(wood => squares[fireLane + wood].classList.add('woodland'))
        hurricaneEyeBox.forEach(eye => squares[hurricaneEyeIndex + eye].classList.add('eye'))
        hurricaneLaneBoxes.forEach(storm => squares[hurricaneLaneIndex +storm].classList.add('storm'))
        angryPinks.forEach(person => squares[angryPink1 + person].classList.add('angry-pinks'))
        angryPinks.forEach(person => squares[angryPink2 + person].classList.add('angry-pinks'))
        angryPinks.forEach(person => squares[angryPink3 + person].classList.add('angry-pinks'))        
        angryPinks.forEach(person => squares[angryPinkR1 + person].classList.add('angry-pinks'))
        angryPinks.forEach(person => squares[angryPinkR2 + person].classList.add('angry-pinks'))
        angryPinks.forEach(person => squares[angryPinkR3 + person].classList.add('angry-pinks'))        
        policeLaneBoxes.forEach(road => squares[policeLane + road].classList.add('road'))
        policeLaneBoxesRight.forEach(road => squares[policeLaneRight + road].classList.add('road'))
        squares[startingBlockIndex].classList.add('starting-block')
        squares[currentPlayerIndex].classList.add('frog')
    }
    draw()

    /*
    // is there a way to append the immage array to the voterQueBoxes array so a new image of a queing voter is added to the board every seond  
    const voterColors = [
        'url(images/que01.png)',
        'url(images/que02.png)',
        'url(images/que03.png)',
        'url(images/que04.png)',
        'url(images/que05.png)'
      ] 

    */
    
    function growingQue(){
        let addedQ = voterQueBoxes.splice( 0 , 1 )
        addedQ.forEach(person => squares[voterQue + person].classList.add('queueing'))
    }      

    function growingFires(){
        let addedF = fireLaneBoxes.splice( 0 , 1 )
        addedF.forEach(fire => squares[fireLane + fire].classList.add('fire'))
    }
    // reserch how to remove all fire images and reload fliped every 0.5 seconds 


    function moveHurricane(){
        undraw()
        if (hurricaneEyeIndex === 36){
            hurricaneEyeIndex = 45
        }

        hurricaneEyeIndex -=1
        draw()
        infectedWin() // put here becaus the setTimeInterval is SOOOO fast put it in another to make it go slower
    }

    function disappearingPostBoxes(){
        let removed = postBoxes.splice(Math.floor(Math.random()*postBoxes.length), 1)
            removed.forEach(pb => squares[currentPostBoxIndex + pb].classList.remove('post'))
    }

    //protesters on  a loop
    function marchingPinks(){
        undraw()
        if(angryPink1 === 81){
            angryPink1 = 90
        }
        angryPink1 -=1
        if(angryPink2 === 81){
            angryPink2 = 90
        }
        angryPink2 -=1   
        if(angryPink3 === 81){
            angryPink3 = 90
        }
        angryPink3 -=1  
        if(angryPinkR1 === 98){
            angryPinkR1 = 89
        }
        angryPinkR1 +=1
        if(angryPinkR2 === 98){
            angryPinkR2 = 89
        }
        angryPinkR2 +=1   
        if(angryPinkR3 === 98){
            angryPinkR3 = 89
        }
        angryPinkR3 +=1                 
        draw()
    }


    function movingPoliceCars(){
        undraw()
        if (policeLane === 108){
            policeLane = 111
        
        }
        if (policeLaneRight === 119){
            policeLaneRight = 116
        }
        policeLane -=1
        policeLaneRight +=1
        draw()
        alternatingPoliceCarsLeft()
        alternatingPoliceCarsRight()
    }

    //alternating the blue and red police cars

    function alternatingPoliceCarsLeft(){
        if (policeLane){
            policeCarboxes.forEach(car => squares[policeLane + car].classList.add('police-car'))
        }
        if (policeLane % 3){
            policeCarboxes.forEach(car => squares[policeLane + car].classList.add('police-car-red'))
        }
    }

    function alternatingPoliceCarsRight(){
        if (policeLaneRight){
            policeCarboxes.forEach(car => squares[policeLaneRight + car].classList.add('police-car-right'))        
        }
        if (policeLaneRight % 3){
            policeCarboxes.forEach(car => squares[policeLaneRight + car].classList.add('police-car-red-right'))        
        }
    }

    // making the voter/player be blowen across the grid by the storm
    function moveWithStormLeft(){
        if(currentPlayerIndex >=37 && currentPlayerIndex <45){
            squares[currentPlayerIndex].classList.remove('frog')
            currentPlayerIndex -=1
            squares[currentPlayerIndex].classList.add('frog')

        }else if(currentPlayerIndex === 36){
            squares[currentPlayerIndex].classList.remove('frog')
            currentPlayerIndex = 45
            squares[currentPlayerIndex].classList.add('frog')

        }        
    }

    // making the voter/player be move with the protesters
    function moveWithMarchLeft(){
        if(currentPlayerIndex >=81 && currentPlayerIndex <= 89){
            squares[currentPlayerIndex].classList.remove('frog')
            currentPlayerIndex -=1
            squares[currentPlayerIndex].classList.add('frog')

        }
        if(currentPlayerIndex === 81){
            squares[currentPlayerIndex].classList.remove('frog')
            currentPlayerIndex = 89
            squares[currentPlayerIndex].classList.add('frog')

        }
        if(currentPlayerIndex >=89 && currentPlayerIndex <99){
            squares[currentPlayerIndex].classList.remove('frog')
            currentPlayerIndex +=1
            squares[currentPlayerIndex].classList.add('frog')

        }    
        if(currentPlayerIndex === 99){
            squares[currentPlayerIndex].classList.remove('frog')
            currentPlayerIndex = 89
            squares[currentPlayerIndex].classList.add('frog')

        }
        loose()
    }

    // set rules for loosing 
    function loose(){
        if((currentTime === 0) 
            || (squares[currentPlayerIndex].classList.contains('police-car'))
            || (squares[currentPlayerIndex].classList.contains('police-car-red'))
            || (squares[currentPlayerIndex].classList.contains('police-car-right'))
            || (squares[currentPlayerIndex].classList.contains('police-car-red-right'))
            || (squares[currentPlayerIndex].classList.contains('angry-pinks')) 
            || (squares[currentPlayerIndex].classList.contains('eye'))
            || (squares[currentPlayerIndex].classList.contains('fire'))
            || (squares[currentPlayerIndex].classList.contains('infected'))){

            result.innerHTML = "Your dead!"
            infoGrid.classList.add('loose')
            undraw()
            endGame()

            }
        }

    // set rules to win    
    function win(){
        if(squares[currentPlayerIndex].classList.contains('post') 
            || (squares[currentPlayerIndex].classList.contains('ballot'))){
            result.innerHTML = "YOU WIN! YOU VOTED!"
            squares[currentPlayerIndex].classList.remove('frog')
            clearInterval(timerId)
            document.removeEventListener('keyup', moveFrog)
            infoSquares[ballotText].classList.add('winner-guide')
            document.body.style.backgroundColor = "#fcba03";
            infoGrid.classList.add('win')
            undraw()
            endGame()
        }
    }

    // set exception for infected win
    function infectedWin(){
        if (squares[currentPlayerIndex].classList.contains('queueing')){
            infoGrid.classList.add('lose')
            result.innerHTML = 'YOU VOTED! But now infected with a deadly virus'
            infoSquares[ballotText].classList.add('infected-guide')
            squares[currentPlayerIndex].classList.add('infected')
            clearInterval(timerId)
            document.removeEventListener('keyup', moveFrog)   
            undraw()
            endGame()         
        }
    }

    // stop timers and clear board. 
    function endGame(){
        // stop all counters
        clearInterval(timerId)
        clearInterval(timerId1)
        clearInterval(timerId2)
        clearInterval(timerId3)
        clearInterval(timerId4)
        clearInterval(timerId5)
        clearInterval(timerId6)
        clearInterval(timerId7)
        clearInterval(timerId8)
        squares[currentPlayerIndex].classList.remove('frog')
        // clear the board
        policeLaneBoxes.forEach(road => squares[policeLane + road].classList.remove('road'))
        policeLaneBoxesRight.forEach(road => squares[policeLaneRight + road].classList.remove('road'))
        fireLaneBoxes.forEach(wood => squares[fireLane + wood].classList.remove('woodland'))
        hurricaneEyeBox.forEach(eye => squares[hurricaneEyeIndex + eye].classList.remove('eye'))
        hurricaneLaneBoxes.forEach(storm => squares[hurricaneLaneIndex +storm].classList.remove('storm'))
        ballotBox.forEach(bBox => squares[currentBallotBoxIndex + bBox].classList.remove('ballot'))
        squares[startingBlockIndex].classList.remove('starting-block')
        squares[currentPlayerIndex].classList.remove('frog')
        squares[currentPlayerIndex].classList.add('frog-dead')
        document.removeEventListener('keyup', moveFrog)
    }

    // player moving with keys. removed case 40 to stop bug
    function moveFrog(e){
        squares[currentPlayerIndex].classList.remove('frog')
        switch(e.keyCode) {
            case 37:
                if(currentPlayerIndex % width !== 0) currentPlayerIndex -=1 // if frog(currentIndx) is diviable by 9 (width) with no remander (%) move left (-=1)
                break
            case 38:
                if(currentPlayerIndex - width >=0) currentPlayerIndex -= width // if frog - 9 (width) is grater then 0, move up grid one space, or -9 squares (-=width)
                break
            case 39:
                if(currentPlayerIndex % width < width - 1) currentPlayerIndex +=1 // if frog is disbale by 9 with no remaned and is lass then -1 then move one square right, or plus one squre
                break
            /*case 40:
                if(currentPlayerIndex + width < width * width) currentPlayerIndex += width // if forg + 9 spaces is less then 81 (width * width), then move frog 9 spaces or 1 width down
                break*/
            }
        loose()
        win()
        fix()
        infoGuides()
        startguide()
    }

    function fix(){
        if(currentPlayerIndex >=72 && currentPlayerIndex <80){
            // grid.classList.add('win')
            stepTwo()
            currentPlayerIndex -=width
            squares[currentPlayerIndex].classList.add('frog')
        }     
    }

    //made timers work when triggered by user hitting a range because it was to confusing to have so many things moving.
    function stepOne(){
        timerId4 = setInterval(disappearingPostBoxes, 750)
        timerId3 = setInterval(moveWithMarchLeft, 750)
        timerId2 = setInterval(marchingPinks, 750) 
        timerId1 = setInterval(movingPoliceCars, 750)
    }

    function stepTwo(){
        clearInterval(timerId1)
        clearInterval(timerId2)
        timerId8 = setInterval(growingQue, 2000)
        timerId7 = setInterval(moveHurricane, 80)
        timerId6 = setInterval(growingFires, 2500)
        timerId5 = setInterval(moveWithStormLeft, 80)         
    }

    //Pop up text graphics to guide user. Used infoGrid to sit over game grid
    function startguide(){
        if (currentPlayerIndex === 139){
            infoSquares[protestersText].classList.add('pinks-guide')
            infoSquares[roadText].classList.add('police-guide')
            infoSquares[startText].classList.add('starting-block-guide')
            infoSquares[postText].classList.add('post-guide')
            setTimeout(hide, 5000);
        }else if(currentPlayerIndex >=126 && currentPlayerIndex <= 134){ 
            hide()
        }
    }

    startBtn.addEventListener('click', () => {
        stepOne()
        startguide()
        document.addEventListener('keyup', moveFrog) // need to add current index pause
        let timerId = setInterval(countDown, 1000)

        function countDown() {
            currentTime-- //decress curretTime -1 
            timeLeft.textContent = currentTime//show  this new time in the browser
        
            if(currentTime === 0){
                clearInterval(timerId)// if tiem = 0 clear the time and trigger alert
            }
        }    
    }) 

})