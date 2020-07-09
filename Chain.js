class Chain{
constructor(bodyA,bodyB){
var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    length:20,
    stiffness:0.04 
}
this.chain = Matter.Constraint.create(options)
World.add(world,this.chain)
}
display(){
var posA = this.chain.bodyA.position
var posB = this.chain.bodyB.position
line (posA.x,posA.y,posB.x,posB.y)
}
}