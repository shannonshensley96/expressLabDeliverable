const skills = [
    {id: 345362, skill:'JavaScript', mastered: false},
    {id: 493940, skill:'HTML', mastered:true},
    {id: 695002, skill: 'CSS', mastered: true}

];

module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill
};

function getAll(){
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill){

   skill.id = Date.now() % 1000000;

   skill.mastered = false;
   skills.push(skill);
}

function deleteSkill(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);

}