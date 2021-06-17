const Skill = require('../models/skills');


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}    

function deleteSkill(req,res){
    Skill.deleteSkill(req.params.id);
    res.redirect('/skills')
}

function create(req, res){
    console.log(req.body, '< - contents of the form in variable, req.body')
    // perform our logic 
    Skill.create(req.body)

    res.redirect('/skills')
}

function newSkill(req,res){
    res.render('skills/new')
}

function index(req,res){

      const skillsList=Skill.getAll()
       res.render('skills/index',{
           skills: skillsList
       });
   }
   

function show(req,res){
    console.log(req.time, 'index function')
    console.log(req.params, 'req.params in show route')

    const skill = Skill.getOne(req.params.id)

    res.render('skills/show',{
        skill: skill
    })
}


