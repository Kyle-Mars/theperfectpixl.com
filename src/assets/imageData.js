let images = [
  //Animated
  {
    src: 'MinorCar.webp',
    alt: 'Animated Rodimus Minor in alt/vehicle mode',
    show: false
  },
  {
    src: 'MinorPortrait.webp',
    alt: 'Animated Rodimus Minor',
    show: false
  },
  {
    src: 'MinorBow.webp',
    alt: 'Animated Rodimus Minor looses his bow',
    show: false
  },
  {
    src: 'MinorReach.webp',
    alt: 'Animated Rodimus Minor reaches for his bow',
    show: true
  },
  {
    src: 'AniOpAlt.webp',
    alt: 'Animated Optimus Prime in alt/vehicle mode.',
    show: false
  },
  {
    src: 'AniOpShrug.webp',
    alt: 'Animated Optimus Prime unsure what to do',
    show: false
  },
  {
    src: 'AniOpWingblade.webp',
    alt: 'Animated Optimus Prime with the Wingblade Armor',
    show: false
  },
  {
    src: 'BumbDash.webp',
    alt: 'Animated Bumblebee dashing forward',
    show: false
  },
  {
    src: 'BumbPose.webp',
    alt: 'Animated Bumblebee posing',
    show: false
  },
  {
    src: 'BumbFanzone.webp',
    alt: 'Animated Bumblebee in alt/vehicle mode',
    show: false
  },
  {
    src: 'DocLoss.webp',
    alt: 'Animated Ratchet losing his EMP generator',
    show: false
  },
  {
    src: 'GrimSword.webp',
    alt: 'Animated Grimlock with a sword over his shoulder',
    show: false
  },
  {
    src: 'GrimDino.webp',
    alt: 'Animated Grimlock in dinosaur mode',
    show: false
  },
  {
    src: 'TronHead.webp',
    alt: 'Closeup of Animated Megatron',
    show: false
  },
  {
    src: 'TronWalk.webp',
    alt: 'Animated Megatron walking',
    show: false
  },
  {
    src: 'BlitzCalculate.webp',
    alt: 'Animated Icy Blitzwing thinking',
    show: false
  },
  {
    src: 'BlitzDrama.webp',
    alt: 'Animated Crazy Blitzwing dancing',
    show: false
  },
  {
    src: 'BlitzUnder.webp',
    alt: 'Animated Blitzwing in tank mode',
    show: false
  },
  {
    src: 'BlitzJet.webp',
    alt: 'Animated Blitzwing in jet mode',
    show: false
  },
  {
    src: 'Bounty.webp',
    alt: 'Animated Lockdown and Prowl capture Starscream',
    show: false
  },
  {
    src: 'LockEye.webp',
    alt: 'Animated Lockdown looking through his hook',
    show: false
  },
  {
    src: 'LockCarClose.webp',
    alt: 'Animated Lockdown in alt/vehicle mode',
    show: false
  },
  {
    src: 'SpiderQueen.webp',
    alt: 'Animated Blackarachnia controlling Grimlock',
    show: false
  },
  {
    src: 'WaveMinion.webp',
    alt: 'Animated Soundwave commanding his minion',
    show: true
  },
  {
    src: 'wave-dance',
    alt: 'Takara Animated Soundwave dancing',
    show: false
  },
  {
    src: 'wave-alt',
    alt: 'Takara Animated Soundwave in alt/vehicle mode',
    show: false
  },
  {
    src: 'ProwlParkour.webp',
    alt: 'Animated Prowl using his wheels to wall run',
    show: true
  },
  {
    src: 'ProwlHanging.webp',
    alt: 'Animated Prowl hanging upside down',
    show: false
  },
  {
    src: 'IronSad.webp',
    alt: 'Animated Bulkhead sad about his reputation',
    show: false
  },
  {
    src: 'IronThink.webp',
    alt: 'Animated Bulkhead looking away',
    show: false
  },

  //RID 2001/Car Robots
  {
    src: 'Cross.webp',
    alt: 'RID/Robots in Disguise Spychanger Crosswise',
    show: false
  },
  {
    src: 'BlackSemi.webp',
    alt: 'Car Robots Black Convoy in alt/vehicle mode with his trailer',
    show: false
  },
  {
    src: 'BlackTruck.webp',
    alt: ' Car Robots Black Convoy in alt/vehicle mode',
    show: false
  },
  {
    src: 'BlackPrep.webp',
    alt: 'Car Robots Black Convoy winding up a punch',
    show: false
  },
  {
    src: 'BlackGloat.webp',
    alt: ' Car Robots Black Convoy standing over his victim (you)',
    show: false
  },
  {
    src: 'BlackSwing.webp',
    alt: 'Car Robots Black Convoy swinging his sword',
    show: false
  },
  {
    src: 'BlackPunch.webp',
    alt: 'Car Robots Black Convoy punching the camera',
    show: true
  },
  {
    src: 'BlackSwordHold.webp',
    alt: 'Car Robots Black Convoy with his sword',
    show: false
  },
  {
    src: 'JRXPoint.webp',
    alt: 'RID/Robots in Disguise Rail Racer/JRX pointing at the camera',
    show: false
  },
  {
    src: 'fire-super',
    alt: 'RID/Robots in Disguise Optimus Prime in Super Mode',
    show: false
  },
  {
    src: 'fire-pose',
    alt: 'RID/Robots in Disguise Optimus Prime posing dynamically',
    show: false
  },
  {
    src: 'fire-alt',
    alt: 'RID/Robots in Disguise Optimus Prime in his alt/vehicle mode',
    show: false
  },
  {
    src: 'GigaClose.webp',
    alt: 'RID/Robots in Disguise Megatron egging you on',
    show: false
  },
  {
    src: 'GigaRoar.webp',
    alt: 'RID/Robots in Disguise Megatron in dragon mode',
    show: false
  },
  {
    src: 'GigaBat.webp',
    alt: 'RID/Robots in Disguise Megatron in bat mode',
    show: false
  },
  {
    src: 'MachAlt.webp',
    alt: 'RID/Robots in Disguise Super Prowl in alt/vehicle mode',
    show: false
  },
  {
    src: 'MachStraight.webp',
    alt: 'RID/Robots in Disguise Super Prowl saluting',
    show: false
  },
  {
    src: 'MachShoulder.webp',
    alt: 'RID/Robots in Disguise Super Prowl looking over his shoulder',
    show: true
  },
  {
    src: 'MachPanic.webp',
    alt: 'RID/Robots in Disguise Super Prowl panicking watching Sideburn',
    show: false
  },
  {
    src: 'XbrawnFist.webp',
    alt: 'RID/Robots in Disguise X-Brawn punching the camera',
    show: false
  },
  {
    src: 'XbrawnAuto.webp',
    alt: 'RID/Robots in Disguise X-Brawn displaying his Autobot badge',
    show: false
  },
  {
    src: 'XbrawnStretch.webp',
    alt: 'RID/Robots in Disguise X-Brawn stretching his joints',
    show: false
  },
  {
    src: 'greejeeber',
    alt: 'Car Robots Greejeeber standing.',
    show: false
  },
  {
    src: 'hepter',
    alt: 'Car Robots Hepter walking.',
    show: false
  },
  {
    src: 'dagnar-alt',
    alt: 'Car Robots Dagnar in alt/vehicle mode.',
    show: false
  },
  {
    src: 'dolrailer-shoot',
    alt: 'Car Robots Dolrailer shooting.',
    show: false
  },
  {
    src: 'baldigus',
    alt: 'Car Robots Baldigus in combined Land Mission mode.',
    show: false
  },

  //Generations
  {
    src: 'magna-shooting',
    alt: 'Legends Magna Convoy shooting at the camera',
    show: false
  },
  {
    src: 'magna-back',
    alt: 'Legends Magna Convoy looking over this shoulder',
    show: true
  },
  {
    src: 'magna-alt',
    alt: 'Legends Magna Convoy in alt/vehicle mode',
    show: false
  },
  {
    src: 'OpMatrix.webp',
    alt: 'War for Cybertron Trilogy Earthrise Optimus Prime looking at the Matrix of Leadership',
    show: false
  },
  {
    src: 'OpStance.webp',
    alt: 'War for Cybertron Trilogy Earthrise Optimus Prime backing up',
    show: false
  },
  {
    src: 'OpShoot.webp',
    alt: 'War for Cybertron Trilogy Earthrise Optimus Prime  aiming to shoot',
    show: false
  },
  {
    src: 'OpCab.webp',
    alt: 'War for Cybertron Trilogy Earthrise Optimus Prime in alt/vehicle mode',
    show: false
  },
  {
    src: 'OpTruck.webp',
    alt: 'War for Cybertron Trilogy Earthrise Optimus Prime in alt/vehicle mode with his trailer',
    show: false
  },
  {
    src: 'TarScheme.webp',
    alt: 'Legacy Tarantulus scheming',
    show: false
  },
  {
    src: 'BulkPunch.webp',
    alt: 'Legacy Bulkhead preparing to punch the camera',
    show: false
  },
  {
    src: 'BulkWinFront.webp',
    alt: 'Legacy Bulkhead punching Soundwave',
    show: false
  },
  {
    src: 'SkywarpLib.webp',
    alt: 'War for Cybertron Trilogy Maximal Skywarp sitting on a bush',
    show: false
  },
  {
    src: 'BlastDancer.webp',
    alt: 'War for Cybertron Trilogy Kingdom Blaster dancing',
    show: false
  },
  {
    src: 'BlastDial.webp',
    alt: 'War for Cybertron Trilogy Kingdom Eject tuning Blaster in boombox mode',
    show: false
  },
  {
    src: 'AirRelax.webp',
    alt: 'War for Cybertron Trilogy Kingdom Airrazor sitting on a tree',
    show: false
  },
  {
    src: 'AirWaspTree.webp',
    alt: 'War for Cybertron Trilogy Kingdom Airrazor standing victorious over Waspinator',
    show: true
  },
  {
    src: 'RodCyc.webp',
    alt: 'War for Cybertron Trilogy Kingdom Rodimus being attacked by Cyclonus',
    show: true
  },
  {
    src: 'WindComfortClose.webp',
    alt: 'Generations Windblade comforting War for Cybertron Trilogy Kingdom Waspinator',
    show: true
  },
  {
    src: 'BlueFoot.webp',
    alt: 'War for Cybertron Trilogy Earthrise Bluestreak kicking the camera',
    show: false
  },
  {
    src: 'MegStand.webp',
    alt: 'War for Cybertron Trilogy Netflix Megatron standing menacingly',
    show: false
  },
  {
    src: 'MegKill.webp',
    alt: 'War for Cybertron Trilogy Netflix Megatron about to kill Cog',
    show: false
  },
  {
    src: 'MegTankUnder.webp',
    alt: 'War for Cybertron Trilogy Netflix Megatron crushing Cog in alt/vehicle mode',
    show: false
  },
  {
    src: 'ThundersThink.webp',
    alt: 'War for Cybertron Trilogy Siege Thundercracker contemplating his allegiance',
    show: false
  },
  {
    src: 'PredaconsGroupAction.webp',
    alt: 'War for Cybertron Trilogy Kingdom Dinobot and Blackarachnia rebelling against Predacon Megatron',
    show: false
  },
  {
    src: 'BarrKill.webp',
    alt: 'War for Cybertron Trilogy Siege Barricade about to execute his Autobot captive',
    show: false
  },
  {
    src: 'BarrHostage.webp',
    alt: 'War for Cybertron Trilogy Siege Barricade holding an Autobot captive',
    show: false
  },
  {
    src: 'SoundBird.webp',
    alt: 'War for Cybertron Trilogy Netflix Soundwave with Laserbeak',
    show: false
  },
  {
    src: 'InfernoSalute.webp',
    alt: 'Legacy Inferno saluting his queen',
    show: false
  },
  {
    src: 'InfernoScream.webp',
    alt: 'Legacy Inferno screams with madness',
    show: false
  },
  {
    src: 'InfernoAnt.webp',
    alt: 'Legacy Inferno in his ant/alt mode',
    show: false
  },
  {
    src: 'TarnAlt.webp',
    alt: 'Legacy Evolution Tarn in his vehicle/alt mode',
    show: false
  },
  {
    src: 'TarnCrouch.webp',
    alt: 'Legacy Evolution Tarn kneeling',
    show: false
  },
  {
    src: 'StreakLean.webp',
    alt: 'War for Cybertron Earthrise Bluestreak leaning against a pole',
    show: true
  },
  {
    src: 'GalvFist.webp',
    alt: 'War for Cybertron Trilogy Generations Selects Galvatron clenching his fist',
    show: false
  },
  {
    src: 'SpinLeave.webp',
    alt: "War for Cybertron Trilogy Siege Spinister's Target Masters walking away while he relaxes",
    show: true
  },
  {
    src: 'SpinGuns.webp',
    alt: 'War for Cybertron Trilogy Siege Spinister standing with his guns',
    show: false
  },
  {
    src: 'SpinHelp.webp',
    alt: 'Spinister helping up one of his Battle Masters',
    show: false
  },
  {
    src: 'CheetorRelax.webp',
    alt: 'War for Cybertron Trilogy Netflix Cheetor taking a break',
    show: false
  },
  {
    src: 'CheetorLay.webp',
    alt: 'War for Cybertron Trilogy Netflix Cheetor laying down in beast mode',
    show: false
  },
  {
    src: 'CheetorSwing.webp',
    alt: 'Kingdom Cheetor swinging on a branch.',
    show: true
  },
  {
    src: 'SkidsAlt.webp',
    alt: 'Legacy Skids in alt/vehicle mode',
    show: false
  },
  {
    src: 'BeePose.webp',
    alt: 'War for Cybertron Trilogy Netflix Bumblebee posing dramatically',
    show: false
  },
  {
    src: 'BeeAlt.webp',
    alt: 'War for Cybertron Trilogy Netflix Bumblebee in alt/vehicle mode',
    show: false
  },
  {
    src: 'LioAltRun.webp',
    alt: 'Legacy Evolution Leo Prime walking in beast mode',
    show: false
  },
  {
    src: 'LioKneel.webp',
    alt: 'Legacy Evolution Leo Prime kneeling',
    show: false
  },
  {
    src: 'overrun',
    alt: 'Timelines TFCC Over-Run/Runamuck posing',
    show: true
  },

  //Unicron Trilogy
  {
    src: 'galaxy-stand',
    alt: 'Galaxy Force Galaxy Convoy standing in regular robot mode',
    show: false
  },
  {
    src: 'galaxy-super',
    alt: 'Galaxy Force Galaxy Convoy in Super Mode',
    show: true
  },
  {
    src: 'galaxy-alt',
    alt: 'Galaxy Force Galaxy Convoy in alt/vehicle mode',
    show: false
  },
  {
    src: 'BulletAlt.jpg',
    alt: 'Galaxy Force Land Bullet in alt/vehicle mode',
    show: false
  },
  {
    src: 'vector-power',
    alt: 'Galaxy Force Vector Prime channeling the power of his Cyber Key',
    show: false
  },
  {
    src: 'vector-roots',
    alt: 'Galaxy Force Vector Prime carrying his Mini-Con roots',
    show: false
  },
  {
    src: 'vector-alt',
    alt: 'Galaxy Force Vector Prime in his alt/vehicle mode',
    show: false
  },
  {
    src: 'VectorSwing.jpg',
    alt: 'Galaxy Force Vector Prime swinging his sword.',
    show: false
  },
  {
    src: 'VectorGesture.jpg',
    alt: 'Galaxy Force Vector Prime gesturing.',
    show: false
  },
  {
    src: 'PrimusShoot.webp',
    alt: 'Cybertron Primus shooting',
    show: false
  },
  {
    src: 'PrimusGood.webp',
    alt: 'Cybertron Primus holding an Autobot Cyber Key',
    show: false
  },
  {
    src: 'PrimusEvil.webp',
    alt: 'Cybertron Primus holding a Decepticon Cyber Key',
    show: false
  },
  {
    src: 'PrimusClose.webp',
    alt: 'A closeup on Cybertron Primus',
    show: false
  },
  {
    src: 'PrimusAlt.webp',
    alt: 'Cybertron Primus as the planet Cybertron',
    show: false
  },
  {
    src: 'DirgeWalk.jpg',
    alt: 'Universe Dirge Walking',
    show: false
  },
  {
    src: 'Side.jpg',
    alt: 'Armada Sideways posing',
    show: false
  },
  {
    src: 'SideRiders.jpg',
    alt: 'Armada Rook and Crosswise standing next to Sideways in alt/vehicle mode',
    show: false
  },
  {
    src: 'SideAlt.jpg',
    alt: 'Armada Sideways in alt/vehicle mode',
    show: false
  },
  {
    src: 'grap-alt',
    alt: 'Micron Legend Super Mode Grap and Spark Lift in alt/vehicle mode',
    show: false
  },
  {
    src: 'grap',
    alt: 'Micron Legend Super Mode Grap and Spark Lift',
    show: false
  },
  {
    src: 'tread-beat',
    alt: 'Superlink Irontread beating his chest',
    show: false
  },
  {
    src: 'tread-hyper',
    alt: 'Superlink Irontread in his Hyper Mode.',
    show: false
  },
  {
    src: 'tread-alt',
    alt: 'Superlink Irontread in his alt/vehicle mode.',
    show: false
  },
  {
    src: 'laserwave-shoot',
    alt: 'Superlink Laserwave shooting the camera',
    show: false
  },
  {
    src: 'laserwave-sat',
    alt: 'Superlink Laserwave in his satellite alt/vehicle mode',
    show: false
  },
  {
    src: 'laserwave-tank',
    alt: 'Superlink Laserwave in his tank alt/vehicle mode',
    show: false
  },
  {
    src: 'micron-street-action.jpg',
    alt: 'The Micron Legend Street Action Microns in alt/vehicle mode',
    show: false
  },
  {
    src: 'micron-bumble.jpg',
    alt: 'Micron Legend Bumble waving hello',
    show: false
  },
  {
    src: 'superlink-galvatron-pose.jpg',
    alt: 'Superlink Galvatron posing',
    show: true
  },

  //Misc
  {
    src: 'big-shoot',
    alt: 'Beast Wars Neo Big Convoy shooting at the camera',
    show: true
  },
  {
    src: 'big-pose',
    alt: 'Beast Wars Neo Big Convoy posing heroically',
    show: false
  },
  {
    src: 'big-angry',
    alt: 'Beast Wars Neo Big Convoy about to punch the camera',
    show: false
  },
  {
    src: 'big-alt',
    alt: 'Beast Wars Neo Big Convoy in his alt/mammoth mode',
    show: false
  },
  {
    src: 'MonkeAlt.jpg',
    alt: 'Universe Optimus Primal in alt/ape mode',
    show: false
  },
  {
    src: 'AttackAlt.jpg',
    alt: 'APC Toys Attack Prime in alt/vehicle mode',
    show: false
  },
  {
    src: 'AttackSwing.jpg',
    alt: 'APC Toys Attack Prime swinging his sword',
    show: false
  },
  {
    src: 'AttackDraw.jpg',
    alt: 'APC Toys Attack Prime drawing his sword',
    show: false
  },

  //G1
  {
    src: 'punch-punch',
    alt: 'Generation 1/G1 Punch standing',
    show: false
  },
  {
    src: 'punch-counter',
    alt: 'Generation1/G1 Counterpunch standing',
    show: false
  },
  {
    src: 'skull-grax',
    alt: 'Generation 1/G1 Grax standing in front of Skullcruncher',
    show: true
  },
  {
    src: 'skull-alt',
    alt: 'Generation 1/G1 Skullcruncher in alt/beast mode',
    show: false
  },
  {
    src: 'judd',
    alt: 'The Transformers: The Movie Hot Rod in robot mode',
    show: false
  },
  {
    src: 'judd-alt',
    alt: 'The Transformers: The Movie Hot Rod in alt/vehicle mode',
    show: false
  },
  {
    src: 'convoy-walk',
    alt: 'Missing Link Convoy walking',
    show: true
  },
  {
    src: 'convoy-alt',
    alt: 'Missing Link Convoy in his alt/vehicle mode',
    show: true
  },
  {
    src: 'roadbuster_robot.jpg',
    alt: 'Superlink Roadbuster in his robot mode',
    show: false
  },
  {
    src: 'roadbuster_vehicle.jpg',
    alt: 'Superlink Roadbuster in his alt/vehicle mode',
    show: false
  },
  {
    src: 'wing_saber_robot.jpg',
    alt: 'Superlink Wing Saber in his alt/vehicle mode',
    show: false
  },
  {
    src: 'archadis_robot.jpg',
    alt: 'Beast Wars Neo Archadis in his robot mode',
    show: true
  }
]
export default images
