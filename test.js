//case 37: [>left<] board.cur.moveLeft(); break;
//case 38: [>up<] board.cur.rotate(true); break;
//case 39: [>right<] board.cur.moveRight(); break;
//case 40: [>down<] board.dropCount = board.dropDelay; break;
//case 88: [>x<] board.cur.rotate(true); break;
//case 90: [>z<] board.cur.rotate(false); break;
console.log(board.cur);
console.log("testing")
var myo = Myo.create();
var synced = true;
var rightArm = false;
if (myo.arm=="right") {
    rightArm = true
}

myo.on('arm_synced', function(){
    rightArm=false;
    synced = true;
    if (myo.arm=="right") {
        rightArm = true
    }
    console.log(myo.arm)
    if(myo.isLocked)
        myo.unlock();
});

myo.on('arm_unsynced', function(){
    synced=false;
    console.log(myo.isLocked)
    myo.lock();
    console.log(myo.isLocked)
});

myo.on('double_tap', function(){
    console.log("double tapped")
    myo.unlock();
})

myo.on('wave_in', function(){
    if(synced){
        if(rightArm){
            board.cur.moveLeft();
        }else{
            board.cur.moveRight();
        }
    }
})

myo.on('wave_out', function(){
    if(synced){
        if(rightArm){
            board.cur.moveRight();
        }else{
            board.cur.moveLeft();
        }
    }
})

