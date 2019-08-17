function Character(name, gender, combat_class, race) {
    this.name = name;
    this.gender = gender;
    this.race = race;
    this.combat_class = combat_class;
    this.hp = {
        max_hp:0,
        current_hp:0,
        temporary_hp:0,
        alive:true,
        death_throws:0

    };
    this.other_stats = {
        initiative:0,
        armor_class:0,
        speed:0,

    }
    this.stats = {
        strength:{
            str:0,
            modifier:-5
        },
        dexterity:{
            str:0,
            modifier:-5
        },
        constitution:{
            str:0,
            modifier:-5
        },
        intelligence:{
            str:0,
            modifier:-5
        },
        wisdom:{
            str:0,
            modifier:-5
        },
        charisma:{
            str:0,
            modifier:-5
        }
    };
    this.equipment = {
        items: [],
        armor: {
            equiped:'',
            unequiped:[]
        },
        weapons_shields: {
            equipped:{
                hand1:'',
                hand2:''
            },
            unequipped:[]
        },
        other_epuipment:{
            rings: {
                hand1:'',
                hand2:''
            },
            helmet:'',
            amulet:''
        }
    };
    this.calculateDmg = function() {
        let weapon1 = this.equipment.equipped.hand1;
        let weapon2 = this.equipment.equipped.hand2;
        if (weapon1 ==='' && weapon2 === ''){
            return Math.ceil(Math.random() * 6)
        }
    };
    
    this.attack = function() {
        let str = this.strength.modifier;
        return this.calculateDmg() + str;
    }
}

module.export = Character;