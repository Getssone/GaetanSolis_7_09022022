const recipes = [
  {
    id: 1,
    name: "Limonade de coco",
    servings: 1,
    ingredients: [
      {
        ingredient: "Lait de coco",
        quantity: 400,
        unit: "ml",
      },
      {
        ingredient: "Jus de citron",
        quantity: 2,
      },
      {
        ingredient: "Crème de coco",
        quantity: 2,
        unit: "Cuillères à soupe",
      },
      {
        ingredient: "Sucre",
        quantite: 30,
        unit: "grammes",
      },
      {
        ingredient: "Glaçons",
      },
    ],
    time: 10,
    description:
      "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistance désirée.",
    appliance: "Blender",
    ustensils: ["Cuillère à Soupe", "Verres", "Presse citron"],
  },
  {
    id: 2,
    name: "Poisson cru à la tahitienne",
    servings: 2,
    ingredients: [
      {
        ingredient: "Thon rouge (ou blanc)",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Concombre",
        quantity: 1,
      },
      {
        ingredient: "Tomate",
        quantity: 2,
      },
      {
        ingredient: "Carotte",
        quantite: 1,
      },
      {
        ingredient: "Citron vert",
        quantity: 5,
      },
      {
        ingredient: "Lait de coco",
        quantity: 100,
        unit: "ml",
      },
    ],
    time: 60,
    description:
      "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain). Après avoir laissé mariner le poisson, couper le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Râper la carotte. Ajouter les légumes au poisson avec le citron cette fois ci, dans un saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 Cuillères à soupe de crème de coco.",
    appliance: "Saladier",
    ustensils: ["Presse citron"],
  },
  {
    id: 3,
    name: "Poulet coco réunionnais",
    servings: 4,
    ingredients: [
      {
        ingredient: "Poulet",
        quantity: 1,
      },
      {
        ingredient: "Lait de coco",
        quantity: 400,
        unit: "ml",
      },
      {
        ingredient: "Coulis de tomates",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "Poivron rouge",
        quantity: 1,
      },
      {
        ingredient: "Huile d'olive",
        quantity: 1,
        unit: "cuillères à soupe"
      },
    ],
    time: 80,
    description:
      "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Saler et poivrer. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpé en morceaux. Laisser cuire 30 minutes de plus. Servir avec du riz",
    appliance: "Cocotte",
    ustensils: ["Couteau"],
  },
  {
    id: 4,
    name: "Salade de riz",
    servings: 4,
    ingredients: [
      {
        ingredient: "Riz blanc",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "Thon en miettes",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Tomate",
        quantity: 2,
      },
      {
        ingredient: "Oeufs",
        quantity: 2,
      },
      {
        ingredient: "Maïs",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "Vinaigrette",
        quantity: 5,
        unit: "cl",
      },
    ],
    time: 50,
    description:
      "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs durs en quarts ou en lamelle au choix, couper les tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au goût de chacun des cornichons, olives etc..",
    appliance: "Cuiseur de riz",
    ustensils: ["Saladier", "Passoire"],
  },
  {
    id: 5,
    name: "Tarte au thon",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pâte feuilletée",
        quantity: 1,
      },
      {
        ingredient: "Thon en miettes",
        quantity: 130,
        unit: "grammes",
      },
      {
        ingredient: "Tomate",
        quantity: 2,
      },
      {
        ingredient: "Crème fraîche",
        quantity: 2,
        unit: "Cuillères à soupe",
      },
      {
        ingredient: "Gruyère râpé",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Moutarde de Dijon",
        quantity: 1,
        unite: "Cuillères à soupe",
      },
    ],
    time: 45,
    description:
      "Étaler la pâte feuilletée aux dimensions du moule, étaler la moutarde sur la pâte feuilletée, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de Crème fraîche sur toute la tarte et recouvrir de gruyère râpé. Cuire au four 30 minutes.",
    appliance: "Four",
    ustensils: ["Moule à tarte", "Râpe à fromage", "Couteau"],
  },
  {
    id: 6,
    name: "Tarte aux pommes",
    servings: 6,
    ingredients: [
      {
        ingredient: "Pâte brisée",
        quantity: 1,
      },
      {
        ingredient: "Pomme",
        quantity: 3,
      },
      {
        ingredient: "Oeufs",
        quantity: "2",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Sucre en poudre",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 1,
        unit: "sachet",
      },
    ],
    time: 50,
    description:
      "Commencer par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraîche aux oeufs. Une fois que tout est prêt, étaler la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant de positionner les pommes sur la tarte. Finallement verser la préparation à base d'oeufs et de crême fraiche. Laisser cuire au four pendant 30 minutes.",
    appliance: "Four",
    ustensils: ["Moule à tarte", "Saladier", "Fourchette"],
  },
  {
    id: 7,
    name: "Tartelettes au chocolat et aux fraises",
    servings: 6,
    ingredients: [
      {
        ingredient: "Pâte sablée",
        quantity: 1,
      },
      {
        ingredient: "Chocolat au lait",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "Crème liquide",
        quantity: 80,
        unit: "cl",
      },
      {
        ingredient: "Beurre",
        quantity: "30",
        unit: "grammes",
      },
      {
        ingredient: "Fraise",
        quantity: 6,
      },
    ],
    time: 50,
    description:
      "Étaler la pâte dans les moules à tartelette. Faire cuire la pâte 30 minutes. Découper le chocolat en morceaux et le faire chauffer, y ajouter la crême liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pâte sur les tartelettes. Couper les fraises en 2 et les positionner sur les tartelettes.",
    appliance: "Four",
    ustensils: ["Moule à tartelettes (6)", "Casserole"],
  },
  {
    id: 8,
    name: "Brownie",
    servings: 10,
    ingredients: [
      {
        ingredient: "Noix",
        quantity: "180",
        unit: "grammes",
      },
      {
        ingredient: "Chocolat noir",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "Beurre",
        quantity: 120,
        unit: "grammes",
      },
      {
        ingredient: "Oeufs",
        quantity: 2,
      },
      {
        ingredient: "Sucre en poudre",
        quantity: "110",
        unit: "grammes",
      },
      {
        ingredient: "Farine",
        quantity: 90,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Hacher les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeufs et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortir du four et attendre quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.",
    appliance: "Four",
    ustensils: ["Moule à gateaux", "Casserole"],
  },
  {
    id: 9,
    name: "Salade méditerannéene fraîche au chèvre",
    servings: 4,
    ingredients: [
      {
        ingredient: "Concombre",
        quantity: 1,
      },
      {
        ingredient: "Olives",
      },
      {
        ingredient: "Fromage de chèvre",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "Vinaigre balsamique",
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: "Basilic",
      },
    ],
    time: 15,
    description:
      "Peler le concombre, le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamique et l'huile d'olive à votre goût.",
    appliance: "Saladier",
    ustensils: ["Cuillère en bois", "Couteau"],
  },
  {
    id: 10,
    name: "Tartiflette",
    servings: 4,
    ingredients: [
      {
        ingredient: "Reblochon",
        quantity: "1",
      },
      {
        ingredient: "Pommes de terre",
        quantity: 4.5,
        unit: "kg",
      },
      {
        ingredient: "Jambon fumé",
        quantity: 2,
        unit: "tranches",
      },
      {
        ingredient: "Oignon",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "Vin blanc sec",
        quantity: 30,
        unit: "cl",
      },
    ],
    time: 60,
    description:
      "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis les éplucher  et les couper en rondelles. Émincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Saler, poivrer à votre gout (et celui de vos convives ). Laissez mijoter durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Couper le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt!",
    appliance: "Four",
    ustensils: ["Plat à gratin", "Couteau", "Économe"],
  },
  {
    id: 11,
    name: "Salade tomate, mozzarella et pommes",
    servings: 4,
    ingredients: [
      {
        ingredient: "Tomates cerises",
        quantity: 250,
        unit: "grammes",
      },
      {
        ingredient: "Mozzarella",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "Jambon de Parme",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "Pomme",
        quantity: 1,
      },
      {
        ingredient: "Salade verte",
        quantity: 1,
      },
      {
        ingredient: "Vinaigrette",
        quantity: 5,
        unit: "cl",
      },
    ],
    time: 10,
    description:
      "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de Parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre goût. ",
    appliance: "Saladier",
    ustensils: ["Couteau", "Cuillère à melon"],
  },
  {
    id: 12,
    name: "Compote pomme rhubarbe",
    servings: 4,
    ingredients: [
      {
        ingredient: "Rhubarbe",
        quantity: 160,
        unit: "grammes",
      },
      {
        ingredient: "Pomme",
        quantity: 8,
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 6,
        unit: "sachets",
      },
      {
        ingredient: "Eau",
        quantity: "0.5",
        unit: "tasses",
      },
    ],
    time: 40,
    description:
      "Éplucher les fruits et les couper en morceaux, les mettre dans une casserole en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
    appliance: "Casserole",
    ustensils: ["Couteau", "Économe"],
  },
  {
    id: 13,
    name: "Salade mâche et pommes de terre",
    servings: 2,
    ingredients: [
      {
        ingredient: "Mâche",
        quantity: 60,
        unit: "grammes",
      },
      {
        ingredient: "Pommes de terre",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Échalote",
        quantity: 2,
      },
      {
        ingredient: "Vinaigre de cidre",
        quantity: 1,
        unit: "Cuillères à soupe",
      },
      {
        ingredient: "Huile d'olive",
        quantity: 2,
        unit: "Cuillères à soupe",
      },
    ],
    time: 40,
    description:
      "Cuire les pommes de terre environ 30 minutes. Découper les échalottes finement. Durant la cuisson des pommes de terre, préparer la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre la mâche. Ajouter les pommes de terre, échalottes et vinaigrette.",
    appliance: "Casserole",
    ustensils: ["Couteau", "Saladier", "Cuillère en bois"],
  },
  {
    id: 14,
    name: "Galette bretonne saucisse et fromage à raclette",
    servings: 2,
    ingredients: [
      {
        ingredient: "Saucisse bretonne ou de toulouse",
        quantity: 2,
      },
      {
        ingredient: "Farine de blé noir",
        quantity: 130,
        unit: "grammes",
      },
      {
        ingredient: "Oeufs",
        quantity: 1,
      },
      {
        ingredient: "Fromage à raclette",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "Beurre",
        quantity: 75,
        unit: "grammes",
      },
    ],
    time: 100,
    description:
      "Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidire. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes.",
    appliance: "Four",
    ustensils: ["Poêle à frire", "Couteau"],
  },
  {
    id: 15,
    name: "Crêpes chocolat banane",
    servings: 10,
    ingredients: [
      {
        ingredient: "Oeufs",
        quantity: 3,
      },
      {
        ingredient: "Farine",
        quantity: 250,
        unit: "grammes",
      },
      {
        ingredient: "Lait",
        quantity: 600,
        unit: "ml",
      },
      {
        ingredient: "Beurre salé",
        quantity: 30,
        unit: "grammes",
      },
      {
        ingredient: "Chocolat au lait",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Banane",
        quantity: 4,
      },
    ],
    time: 60,
    description:
      "Mélanger dans un saladier, la farine, les oeufs, et le lait. Battre jusqu'à avoir une masse homogène. Pendant ce temps faire fondre le beurre et en ajouter une partie à la pâte à crêpes. Faire fondre le chocolat (avec le reste du beurre salé). Cuire les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajouter une touche de chantilly pour les gourmands.",
    appliance: "Poële à crêpe",
    ustensils: ["Saladier", "Louche", "Cuillère en bois"],
  },
  {
    id: 16,
    name: "Gratin de pâtes à la tomate",
    servings: 2,
    ingredients: [
      {
        ingredient: "Tomate",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "Mozzarella",
        quantity: 250,
        unit: "grammes",
      },
      {
        ingredient: "Penne",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "Basilic",
        quantity: 1,
        unit: "tiges",
      },
      {
        ingredient: "Huile d'olive",
        quantity: 2,
        unit: "Cuillères à soupe",
      },
    ],
    time: 45,
    description:
      "Faire cuire les pâtes, si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches, soit en dés. Couper le basilic en petits morceaux et le mélanger aux tomates.  Couper la mozzarella en tranche. Préchauffer le four à 200°C. Alterner entre couches de pâtes et couches de tomates, terminer par une couche de pâtes et recouvrir de fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
    appliance: "Four",
    ustensils: ["Plat à gratin", "Couteau", "Râpe à fromage"],
  },
  {
    id: 17,
    name: "Smoothie à la fraise",
    servings: 6,
    ingredients: [
      {
        ingredient: "Fraise",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "Pastèque",
        quantity: 0.5,
      },
      {
        ingredient: "Jus de citron",
        quantity: 1,
        unit: "Cuillères à soupe",
      },
      {
        ingredient: "Glaçons",
        quantity: 8,
      },
      {
        ingredient: "Menthe",
      },
    ],
    time: 15,
    description:
      "Couper les fraises en morceaux, découper la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillière à soupe de jus de citron ainsi que les glaçons. Ajouter quelques feuilles de menthe pour plus de fraîcheur. Mixer le tout. Servir et déguster.",
    appliance: "Blender",
    ustensils: ["Verres", "Couteau", "Presse citron"],
  },
  {
    id: 18,
    name: "Smoothie ananas et vanille",
    servings: 5,
    ingredients: [
      {
        ingredient: "Ananas",
        quantity: 1,
      },
      {
        ingredient: "Glace à la vanille",
        quantity: 500,
        unit: "ml",
      },
      {
        ingredient: "Lait",
        quantity: 50,
        unit: "cl",
      },
    ],
    time: 10,
    description:
      "Séparer 1/5ème d'Ananas (une belle tranche qui servira pour la décoration des verres), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixer. Servir et décorer avec l'ananas restant. C'est prêt",
    appliance: "Blender",
    ustensils: ["Verres", "Couteau"],
  },
  {
    id: 19,
    name: "Shake banane kiwi",
    servings: 4,
    ingredients: [
      {
        ingredient: "Kiwis",
        quantity: 4,
      },
      {
        ingredient: "Citron",
        quantity: 1,
      },
      {
        ingredient: "Lait",
        quantity: 1,
        unit: "litres",
      },
      {
        ingredient: "Sucre glace",
        quantity: 30,
        unit: "grammes",
      },
      {
        ingredient: "Banane",
        quantity: 1,
      },
    ],
    time: 0,
    description:
      "Couper les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixer. Ajouter des glaçons si le lait n'a pas été mis au frais.",
    appliance: "Blender",
    ustensils: ["Couteau", "Verres", "Presse citron"],
  },
  {
    id: 20,
    name: "Pâtes carbonara",
    servings: 5,
    ingredients: [
      {
        ingredient: "Tagliatelles",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "Lardons",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Parmesan",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Huile d'olive",
        quantity: 1,
        unit: "Cuillères à soupe",
      },
    ],
    time: 30,
    description:
      "Faire cuire les pâtes comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crême fraiche et baisser le feu au minimum. Quand les tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
    appliance: "Sauteuse",
    ustensils: ["Râpe à fromage", "Cuillère en bois"],
  },
  {
    id: 21,
    name: "Spaghettis à la bolognaise",
    servings: 4,
    ingredients: [
      {
        ingredient: "Spaghettis",
        quantity: 400,
        unit: "grammes",
      },
      {
        ingredient: "Oignon",
        quantity: 2,
      },
      {
        ingredient: "Coulis de tomates",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "Viande hachée 1% de matière grasse",
        quantity: 400,
        unit: "grammes",
      },
      {
        ingredient: "Vin rouge",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 1,
        unit: "Cuillères à soupe",
      },
    ],
    time: 30,
    description:
      "Cuire la viande hachée dans une poêle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oigons avec la viande hachée. Faire cuire les pâtes le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pâtes sont cuites, ajouter la crème fraîche à la viande hachée. Servir.",
    appliance: "Casserole",
    ustensils: ["Cuillère en bois", "Louche", "Couteau"],
  },
  {
    id: 22,
    name: "Fondant au chocolat",
    servings: 4,
    ingredients: [
      {
        ingredient: "Beurre",
        quantity: 160,
        unit: "grammes",
      },
      {
        ingredient: "Chocolat noir",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Farine",
        quantity: 50,
        unit: "grammes",
      },
      {
        ingredient: "Oeufs",
        quantity: 4,
      },
      {
        ingredient: "Sucre",
        quantity: 150,
        unit: "grammes",
      },
    ],
    time: 30,
    description:
      "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200°C puis faire cuire pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crême dessert.",
    appliance: "Four",
    ustensils: ["Moule à gateaux", "Fouet", "Casserole"],
  },
  {
    id: 23,
    name: "Quiche lorraine",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pâte brisée",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Lardons",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Beurre",
        quantity: 30,
        unit: "grammes",
      },
      {
        ingredient: "Oeufs",
        quantity: 3,
      },
      {
        ingredient: "Crème fraîche",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Lait",
        quantity: 20,
        unit: "cl",
      },
    ],
    time: 60,
    description:
      "Étaler la pâte dans un moule et la piquer. Parsemer de beurre. Faire chauffer les lardons dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre goût. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
    appliance: "Four",
    ustensils: ["Moule à gateaux", "Rouleau à patisserie", "Fouet"],
  },
  {
    id: 24,
    name: "Salade de pâtes",
    servings: 4,
    ingredients: [
      {
        ingredient: "Thon en miettes",
        quantity: 160,
        unit: "grammes",
      },
      {
        ingredient: "Maïs",
        quantity: 60,
        unit: "grammes",
      },
      {
        ingredient: "Tomate",
        quantity: 1,
      },
      {
        ingredient: "Concombre",
        quantity: 0.5,
      },
      {
        ingredient: "Macaronis",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "Mayonnaise",
        quantity: 2,
        unit: "Cuillères à soupe",
      },
    ],
    time: 40,
    description:
      "Découper le concombre et les tomates en dés, les mettre dans un saladier avec le maïs et les miettes de poisson, ajouter les pâtes. Ajouter la mayonnaise. Mélanger le tout et servir frais.",
    appliance: "Saladier",
    ustensils: ["Couteau", "Cuillère en bois"],
  },
  {
    id: 25,
    name: "Cookies",
    servings: 4,
    ingredients: [
      {
        ingredient: "Sucre",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Beurre",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Farine",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Chocolat noir en pépites",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Oeufs",
        quantity: 1,
      },
    ],
    time: 30,
    description:
      "Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu à peu pour avoir une masse sans grumaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180°C pendant 10 minutes.",
    appliance: "Four",
    ustensils: ["Fouet", "Saladier", "Plaque de cuisson"],
  },
  {
    id: 26,
    name: "Soupe de tomates",
    servings: 2,
    ingredients: [
      {
        ingredient: "Tomate",
        quantity: 6,
      },
      {
        ingredient: "Pommes de terre",
        quantity: 1,
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "Ail",
        quantity: 1,
        unit: "gousses",
      },
    ],
    time: 25,
    description:
      "Verser de l'huile dans une cocotte minute, couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixeur. Servir.",
    appliance: "Mixeur",
    ustensils: ["Cocotte minute", "Couteau"],
  },
  {
    id: 27,
    name: "Soupe à l'oseille",
    servings: 4,
    ingredients: [
      {
        ingredient: "Oseille",
        quantity: 2,
      },
      {
        ingredient: "Oeufs",
        quantity: 1,
      },
      {
        ingredient: "Crème fraîche",
        quantity: 4,
        unit: "Cuillères à soupe",
      },
      {
        ingredient: "Vermicelles",
        quantity: 1,
        unit: "verre",
      },
      {
        ingredient: "Beurre salé",
        quantity: 50,
        unit: "grammes",
      },
    ],
    time: 15,
    description:
      "Faire fondre l'oseille avec du beurre demi-sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une fois prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crème fraîche.",
    appliance: "Casserole",
    ustensils: ["Couteau", "Cuillère en bois"],
  },
  {
    id: 28,
    name: "Soupe de poireaux",
    servings: 4,
    ingredients: [
      {
        ingredient: "Poireau",
        quantity: 3,
      },
      {
        ingredient: "Pommes de terre",
        quantity: 400,
        unit: "grammes",
      },
      {
        ingredient: "Oseille",
        quantity: 75,
        unit: "grammes",
      },
      {
        ingredient: "Beurre",
        quantity: 50,
        unit: "grammes",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 10,
        unit: "cl",
      },
    ],
    time: 80,
    description:
      "Emincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appétit.",
    appliance: "Mixeur",
    ustensils: ["Casserole", "Couteau"],
  },
  {
    id: 29,
    name: "Houmous express",
    servings: 2,
    ingredients: [
      {
        ingredient: "Pois chiches",
        quantity: 1,
        unit: "boite",
      },
      {
        ingredient: "Ail",
        quantity: 1,
        unit: "gousses",
      },
      {
        ingredient: "Citron",
        quantity: 2,
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: "Paprika",
      },
    ],
    time: 30,
    description:
      "Prendre les pois chiches, les mettre dans le mixeur avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le goût.",
    appliance: "Mixeur",
    ustensils: ["Cuillère en bois", "Presse citron"],
  },
  {
    id: 30,
    name: "Purée de pois cassés",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pois Cassés",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "Ail",
        quantity: 2,
        unit: "gousses",
      },
    ],
    time: 60,
    description:
      "Mettre tous les ingrédients dans une cocotte. Ajouter de l'eau pour recouvrir l'ensemble et laisser cuire à petit feu pendant 1 heure. Passer au mixeur. Saler, poivrer. C'est prêt.",
    appliance: "Mixeur",
    ustensils: ["Casserole", "Cuillère en bois"],
  },
  {
    id: 31,
    name: "Jardinière de légumes",
    servings: 4,
    ingredients: [
      {
        ingredient: "Carotte",
        quantity: 2,
      },
      {
        ingredient: "Pommes de terre",
        quantity: 2,
      },
      {
        ingredient: "Haricots verts",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "Petits pois",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Lardons",
        quantity: 150,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit pois et les haricots verts (tous deux pré-cuits ). Ajouter sel, poivre, thym et laurier.",
    appliance: "Poële",
    ustensils: ["Couteau", "Économe"],
  },
  {
    id: 32,
    name: "Croque monsieur à la dinde",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pain de mie",
        quantity: 8,
        unit: "tranches",
      },
      {
        ingredient: "Blanc de dinde",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "Emmental",
        quantity: 8,
        unit: "tranches",
      },
      {
        ingredient: "Gruyère",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Lait",
        quantity: 5,
        unit: "cl",
      },
      {
        ingredient: "Noix de muscade",
        quantity: 1,
        unit: "pincée",
      },
    ],
    time: 20,
    description:
      "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'emmental, une de blanc de dinde, et une autre d'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieur. Placer au four durant 10 minutes.",
    appliance: "Four",
    ustensils: ["Râpe à fromage", "Cuillère à Soupe", "Couteau"],
  },
  {
    id: 33,
    name: "Sandwich au saumon fumé",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pain de mie",
        quantity: 8,
        unit: "tranches",
      },
      {
        ingredient: "Saumon Fumé",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "Feuilles de laitue",
        quantity: 4,
      },
      {
        ingredient: "Fromage blanc",
        quantity: 4,
        unit: "Cuillères à soupe",
      },
      {
        ingredient: "Jus de citron",
        quantity: 1,
        unit: "Cuillères à soupe",
      },
    ],
    time: 5,
    description:
      "Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre goût. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt.",
    appliance: "Four",
    ustensils: ["Couteau", "Cuillère en bois"],
  },
  {
    id: 34,
    name: "Purée de patates douces",
    servings: 4,
    ingredients: [
      {
        ingredient: "Patate douce",
        quantity: 800,
        unit: "grammes",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: "Orange",
        quantity: 1,
      },
    ],
    time: 25,
    description:
      "Eplucher les patates douces et couper les en morceaux. Les faire cuire durant 20 minutes dans une casserole d'eau bouillante. Passer au mixeur en ajoutant la crème et l'huile d'olive à son goût. Saler, poivrer. Presser l'orange et ajouter le jus à l'ensemble. Servir.",
    appliance: "Mixeur",
    ustensils: ["Couteau", "Économe", "Cuillère en bois"],
  },
  {
    id: 35,
    name: "Purée de carottes",
    servings: 2,
    ingredients: [
      {
        ingredient: "Carotte",
        quantity: 6,
      },
      {
        ingredient: "Pommes de terre",
        quantity: 1,
      },
      {
        ingredient: "Beurre",
        quantity: 20,
        unit: "grammes",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 2,
        unit: "Cuillères à soupe",
      },
      {
        ingredient: "Cumin",
        quantity: 1,
        unit: "Cuillère à café",
      },
      {
        ingredient: "Noix de muscade",
        quantity: 1,
        unit: "pincée",
      },
    ],
    time: 25,
    description:
      "Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumin et la noix de muscade.",
    appliance: "Mixeur",
    ustensils: ["Cocotte minute", "Couteau", "Cuillère en bois"],
  },
  {
    id: 36,
    name: "Lasagnes courgettes et chèvre",
    servings: 2,
    ingredients: [
      {
        ingredient: "Courgette",
        quantity: 2,
      },
      {
        ingredient: "Fromage de chèvre",
        quantity: 4,
      },
      {
        ingredient: "Lait",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Feuilles de lasagnes",
        quantity: 5,
        unit: "feuilles",
      },
      {
        ingredient: "Gruyère",
        quantity: 40,
        unit: "grammes",
      },
      {
        ingredient: "Maïzena",
        quantity: 1,
        unit: "Cuillères à soupe",
      },
    ],
    time: 35,
    description:
      "Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamelle avec le lait et la maïzena. Saler, poivrer, ajouter de la noix de muscade selon les goûts. Dans un plat, mettre un peu de sauce au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauce et ajouter le gruyère. Passer au four à 180° durant 20 à 25 minutes.",
    appliance: "Four",
    ustensils: ["Plat à gratin", "Râpe à fromage", "Fouet"],
  },
  {
    id: 37,
    name: "Courgettes farcies au boeuf",
    servings: 2,
    ingredients: [
      {
        ingredient: "Courgette",
        quantity: 2,
      },
      {
        ingredient: "Viande hachée",
        quantity: 600,
        unit: "grammes",
      },
      {
        ingredient: "Huile d'olive",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "Coulis de tomates",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Gruyère",
        quantity: 50,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Couper les courgettes dans le sens de la longueur. Vider les courgettes dans un saladier. Réserver. Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rapé.",
    appliance: "Four",
    ustensils: ["Couteau", "Cuillère en bois", "Poêle à frire"],
  },
  {
    id: 38,
    name: "Pain perdu",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pain",
        quantity: 6,
        unit: "tranches",
      },
      {
        ingredient: "Lait",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Oeufs",
        quantity: 3,
      },
      {
        ingredient: "Sucre roux",
        quantity: 75,
        unit: "grammes",
      },
    ],
    time: 20,
    description:
      "Fouetter les oeufs, le sucre et le lait. Tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir.",
    appliance: "Four",
    ustensils: ["Fouet", "Bol", "Cuillère à Soupe"],
  },
  {
    id: 39,
    name: "Crumble aux pommes",
    servings: 40,
    ingredients: [
      {
        ingredient: "Pomme",
        quantity: 2,
      },
      {
        ingredient: "Farine",
        quantity: 100,
        unit: "gr",
      },
      {
        ingredient: "Beurre",
        quantity: 50,
        unit: "gr",
      },
      {
        ingredient: "Sucre roux",
        quantity: 80,
        unit: "grammes",
      },
    ],
    time: 40,
    description:
      "Découper les pommes en dés. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus, placer la pâte que vous avez obtenue. Cuire 20 minutes au four.",
    appliance: "Four",
    ustensils: ["Saladier", "Couteau", "Fouet"],
  },
  {
    id: 40,
    name: "Limonade",
    servings: 4,
    ingredients: [
      {
        ingredient: "Eau",
        quantity: 1,
        unit: "Litres",
      },
      {
        ingredient: "Citron vert",
        quantity: 3,
      },
      {
        ingredient: "Sucre en poudre",
        quantity: 4,
        unit: "Cuillère à café",
      },
      {
        ingredient: "Bicarbonate",
        quantity: 1,
        unit: "Cuillère à café",
      },
    ],
    time: 10,
    description:
      "Dans un saladier mettre l'eau, le jus des citrons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçons et une feuille de menthe pour la déco.",
    appliance: "Saladier",
    ustensils: ["Cuillère en bois"],
  },
  {
    id: 41,
    name: "Mousse au chocolat",
    servings: 4,
    ingredients: [
      {
        ingredient: "Oeufs",
        quantity: 3,
      },
      {
        ingredient: "Chocolat noir",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 1,
        unit: "sachet",
      },
    ],
    time: 20,
    description:
      "Séparer les blancs d'oeufs. Faire fondre le chocolat au bain-marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélangez délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais.",
    appliance: "Casserole",
    ustensils: ["Fouet", "Spatule", "Verres"],
  },
  {
    id: 42,
    name: "Charlotte aux poires",
    servings: 3,
    ingredients: [
      {
        ingredient: "Chocolat",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Oeufs",
        quantity: 3,
      },
      {
        ingredient: "Poires au jus",
        quantity: 1 / 2,
        unit: "boite",
      },
      {
        ingredient: "Boudoirs",
        quantity: 15,
      },
    ],
    time: 60,
    description:
      "Commencer par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposé, mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.",
    appliance: "Moule à charlotte",
    ustensils: ["Saladier", "Couteau", "Fouet"],
  },
  {
    id: 43,
    name: "Tarte au citron",
    servings: 6,
    ingredients: [
      {
        ingredient: "Pâte brisée",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Sucre",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "Beurre",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Oeufs",
        quantity: 3,
      },
      {
        ingredient: "Citron",
        quantity: 1,
      },
    ],
    time: 50,
    description:
      "Préchauffer le fours à 200°C. Étaler la pâte. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pâte. Au four 30 minutes. Bon appétit. ",
    appliance: "Four",
    ustensils: ["Rouleau à patisserie", "Moule à tarte", "Presse citron"],
  },
  {
    id: 44,
    name: "Crème dessert au chocolat",
    servings: 6,
    ingredients: [
      {
        ingredient: "Lait",
        quantity: 1,
        unit: "litre",
      },
      {
        ingredient: "Chocolat",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Sucre",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Beurre",
        quantity: 50,
        unit: "grammes",
      },
      {
        ingredient: "Farine",
        quantity: 40,
        unit: "grammes",
      },
    ],
    time: 15,
    description:
      "Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres.",
    appliance: "Casserole",
    ustensils: ["Cuillère en bois"],
  },
  {
    id: 45,
    name: "Crème pâtissière",
    servings: 8,
    ingredients: [
      {
        ingredient: "Lait",
        quantity: 50,
        unit: "cl",
      },
      {
        ingredient: "Oeufs",
        quantity: 2,
      },
      {
        ingredient: "Farine",
        quantity: 30,
        unit: "grammes",
      },
      {
        ingredient: "Sucre",
        quantity: 80,
        unit: "grammes",
      },
    ],
    time: 30,
    description:
      "Faire bouillir le lait (on peut y ajouter de l'essence de vanille). Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.",
    appliance: "Casserole",
    ustensils: ["Fouet", "Saladier"],
  },
  {
    id: 46,
    name: "Far breton",
    servings: 6,
    ingredients: [
      {
        ingredient: "Farine",
        quantity: 250,
        unit: "grammes",
      },
      {
        ingredient: "Sucre",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 1,
        unit: "sachet",
      },
      {
        ingredient: "Oeufs",
        quantity: 4,
      },
      {
        ingredient: "Lait",
        quantity: 1,
        unit: "litre",
      },
      {
        ingredient: "Pruneaux",
        quantity: 100,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit verre de rhum. Verser la masse dans un plat beurré, y placer les pruneaux et faire cuire à 200°C pendant 45 minutes.",
    appliance: "Four",
    ustensils: ["Fouet", "Moule", "Verres"],
  },
  {
    id: 47,
    name: "Mousse au citron",
    servings: 6,
    ingredients: [
      {
        ingredient: "Jus de citron",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Mascarpone",
        quantity: 250,
        unit: "grammes",
      },
      {
        ingredient: "Sucre",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 20,
        unit: "cl",
      },
    ],
    time: 5,
    description:
      "Mélanger le jus de citron avec le sucre et le mascarpone. Ajouter la crème fraîche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir.",
    appliance: "Saladier",
    ustensils: ["Fouet", "Verres", "Cuillère en bois"],
  },
  {
    id: 48,
    name: "Pizza",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pâte à pizza",
        quantity: 1,
      },
      {
        ingredient: "Tomates pelées",
        quantity: 1,
        unit: "boite",
      },
      {
        ingredient: "Lardons",
        quantity: 1,
        unit: "barquette",
      },
      {
        ingredient: "Champignons de paris",
        quantity: 1,
        unit: "boite",
      },
      {
        ingredient: "Gruyère",
        quantity: 200,
        unit: "grammes",
      },
    ],
    time: 40,
    description:
      "Étaler la pâte a pizza. Écraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère et passer au four à 220°C durant 20 minutes.",
    appliance: "Four",
    ustensils: ["Rouleau à patisserie", "Râpe à fromage", "Couteau"],
  },
  {
    id: 49,
    name: "Smoothie tropical",
    servings: 4,
    ingredients: [
      {
        ingredient: "Banane",
        quantity: 2,
      },
      {
        ingredient: "Kiwis",
        quantity: 3,
      },
      {
        ingredient: "Mangue",
        quantity: 1,
      },
      {
        ingredient: "Ananas",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "Miel",
        quantity: 2,
        unit: "Cuillères à soupe",
      },
    ],
    time: 0,
    description:
      "Découper les fruits. Les passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir.",
    appliance: "Blender",
    ustensils: ["Couteau", "Verres"],
  },
  {
    id: 50,
    name: "Galette à la frangipane",
    servings: 2,
    ingredients: [
      {
        ingredient: "Pâte feuilletée",
        quantity: 400,
        unit: "grammes",
      },
      {
        ingredient: "Oeufs",
        quantity: 6,
      },
      {
        ingredient: "Poudre d'amandes",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "Beurre",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "Sucre glace",
        quantity: 500,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Préparer la frangipane : mélanger le sucre la poudre d'amandes, le beurre et les oeufs. Étaler la moitié de la pâte feuilletée et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pâte feuilletée. Mettre au four 30 minutes.",
    appliance: "Four",
    ustensils: ["Rouleau à patisserie", "Fouet"],
  },
];
