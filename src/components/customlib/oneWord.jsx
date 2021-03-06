const oneWord = [
    { 'question': 'An act of abdicating or renouncing the throne', 'answer': 'Abdication' },
    { 'question': 'An annual calendar containing important dates and statistical information such as astronomical data and tide tables', 'answer': 'Almanac' },
    { 'question': 'A cold-blooded vertebrate animal that is born in water and breathes with gills', 'answer': 'Amphibian' },
    { 'question': 'A story, poem, or picture that can be interpreted to reveal a hidden meaning, typically a moral or political one', 'answer': 'Allegory' },
    { 'question': 'A statement or proposition on which an abstractly defined structure is based', 'answer': 'Axiom' },
    { 'question': 'A nation or person engaged in war or conflict, as recognized by international law', 'answer': 'Belligerent' },
    { 'question': 'An examination of tissue removed from a living body to discover the presence, cause or extent of a disease', 'answer': 'Biopsy' },
    { 'question': 'The action or offence of speaking sacrilegiously about God or sacred things; profane talk', 'answer': 'Blasphemy' },
    { 'question': 'The arrangement of events or dates in the order of their occurrence', 'answer': 'Chronology' },
    { 'question': 'A vigorous campaign for political, social, or religious change', 'answer': 'Crusade' },
    { 'question': 'Lasting for a very short time', 'answer': 'Ephemeral' },
    { 'question': 'Spoken or done without preparation', 'answer': 'Extempore' },
    { 'question': 'Release someone from a duty or obligation', 'answer': 'Exonerate' },
    { 'question': 'Fond of company', 'answer': 'Gregarious' },
    { 'question': 'Making marks that cannot be removed', 'answer': 'Indelible' },
    { 'question': 'Incapable of making mistakes or being wrong', 'answer': 'Infallible' },
    { 'question': 'Certain to happen', 'answer': 'Inevitable' },
    { 'question': 'A sentimental longing or wistful affection for a period in the past', 'answer': 'Nostalgia' },
    { 'question': 'A solution or remedy for all difficulties or diseases', 'answer': 'Panacea' },
    { 'question': 'A doctrine which identifies God with the universe', 'answer': 'Pantheism' },
    { 'question': 'Excessively concerned with minor details or rules', 'answer': 'Pedantic' },
    { 'question': 'The practice of taking someone else???s work or ideas and passing them off as one???s own', 'answer': 'Plagiarism' },
    { 'question': 'Safe to drink', 'answer': 'Potable' },
    { 'question': 'The emblems or insignia of royalty', 'answer': 'Regalia' },
    { 'question': 'Violation or misuse of what is regarded as sacred', 'answer': 'Sacrilege' },
    { 'question': 'A position requiring little or no work but giving the holder status or financial benefit', 'answer': 'Sinecure' },
    { 'question': 'A thing that is kept as a reminder of a person, place, or event', 'answer': 'Souvenir' },
    { 'question': 'An imaginary ideal society free of poverty and suffering', 'answer': 'Utopia' },
    { 'question': 'Denoting a sin that is not regarded as depriving the soul of divine grace', 'answer': 'Venial' },
    { 'question': 'In exactly the same words as were used originally', 'answer': 'Verbatim' },
    { 'question': 'A state of disorder due to absence or non-recognition of authority or other controlling systems', 'answer': 'Anarchy' },
    { 'question': 'A form of government in which power is held by the nobility', 'answer': 'Aristocracy' },
    { 'question': 'A system of government by one person with absolute power', 'answer': 'Autocracy' },
    { 'question': 'A self-governing country or region', 'answer': 'Autonomy' },
    { 'question': 'A system of government in which most of the important decisions are taken by state officials rather than by elected representatives', 'answer': 'Bureaucracy' },
    { 'question': 'A system of government by the whole population or all the eligible members of a state, typically through elected representatives', 'answer': 'Democracy' },
    { 'question': 'A state, society, or group governed by old people', 'answer': 'Gerontocracy' },
    { 'question': 'A state or country run by the worst, least qualified, or most unscrupulous citizens', 'answer': 'Kakistocracy' },
    { 'question': 'Government by new or inexperienced hands', 'answer': 'Neocracy' },
    { 'question': 'Government by the populace', 'answer': 'Ochlocracy' },
    { 'question': 'A small group of people having control of a country or organization', 'answer': 'Oligarchy' },
    { 'question': 'Government by the wealthy', 'answer': 'Plutocracy' },
    { 'question': 'Government not connected with religious or spiritual matters', 'answer': 'Secular' },
    { 'question': 'A form of government with a monarch at the head', 'answer': 'Monarchy' },
    { 'question': 'A political system based on the government of men by God', 'answer': 'Thearchy' },
    { 'question': 'A collection of historical documents or records providing information about a place, institution, or group of people', 'answer': 'Archives' },
    { 'question': 'A large cage, building, or enclosure to keep birds\xa0', 'answer': 'Aviary' },
    { 'question': 'A building where animals are butchered', 'answer': 'Abattoir' },
    { 'question': 'A place where bees are kept; a collection of beehives', 'answer': 'Apiary' },
    { 'question': 'A building containing tanks of live fish of different species', 'answer': 'Aquarium' },
    { 'question': 'A place or scene of activity, debate, or conflict', 'answer': 'Arena' },
    { 'question': 'A collection of weapons and military equipment', 'answer': 'Arsenal' },
    { 'question': 'An institution for the care of people who are mentally ill', 'answer': 'Asylum' },
    { 'question': 'A hole or tunnel dug by a small animal, especially a rabbit, as a dwelling', 'answer': 'Burrow' },
    { 'question': 'A collection of items of the same type stored in a hidden or inaccessible place', 'answer': 'Cache' },
    { 'question': 'A public room or building where gambling games are played', 'answer': 'Casino' },
    { 'question': 'A large burial ground, especially one not in a churchyard', 'answer': 'Cemetery' },
    { 'question': 'A room in a public building where outdoor clothes or luggage may be left', 'answer': 'Cloakroom' },
    { 'question': 'A place where a dead person???s body is cremated', 'answer': 'Crematorium' },
    { 'question': 'A Christian community of nuns living together under monastic vows', 'answer': 'Convent' },
    { 'question': 'Nursery where babies and young children are cared for during the working day', 'answer': 'Creche' },
    { 'question': 'A stoppered glass container into which wine or spirit is decanted', 'answer': 'Decanter' },
    { 'question': 'A large bedroom for a number of people in a school or institution', 'answer': 'Dormitory' },
    { 'question': 'The nest of a squirrel, typically in the form of a mass of twigs in a tree', 'answer': 'Drey' },
    { 'question': 'A room or building equipped for gymnastics, games, and other physical exercise', 'answer': 'Gymnasium' },
    { 'question': 'A storehouse for threshed grain', 'answer': 'Granary' },
    { 'question': 'A large building with an extensive floor area, typically for housing aircraft', 'answer': 'Hangar' },
    { 'question': 'A box or cage, typically with a wire mesh front, for keeping rabbits or other small domesticated animals', 'answer': 'Hutch' },
    { 'question': 'A place in a large institution for the care of those who are ill', 'answer': 'Infirmary' },
    { 'question': 'A small shelter for a dog', 'answer': 'Kennel' },
    { 'question': 'A place where wild animal live', 'answer': 'Lair' },
    { 'question': 'A place where coins, medals, or tokens are made', 'answer': 'Mint' },
    { 'question': 'A collection of wild animals kept in captivity for exhibition', 'answer': 'Menagerie' },
    { 'question': 'A building or buildings occupied by a community of monks living under religious vows', 'answer': 'Monastery' },
    { 'question': 'A place where bodies are kept for identification', 'answer': 'Morgue' },
    { 'question': 'A piece of enclosed land planted with fruit trees', 'answer': 'Orchard' },
    { 'question': 'A large natural or artificial lake used as a source of water supply', 'answer': 'Reservoir' },
    { 'question': 'A small kitchen or room at the back of a house used for washing dishes and another dirty household work', 'answer': 'Scullery' },
    { 'question': 'A close-fitting cover for the blade of a knife or sword', 'answer': 'Sheath' },
    { 'question': 'A room or building for sick children in a boarding school', 'answer': 'Sanatorium' },
    { 'question': 'A place where animal hides are tanned', 'answer': 'Tannery' },
    { 'question': 'A large, tall cupboard in which clothes may be hung or stored', 'answer': 'Wardrobe' },
    { 'question': 'Difference Between Principal and Principle', 'answer': 'Difference Between Award and Reward' },
    { 'question': 'Difference Between Program and Programme', 'answer': 'Difference Between Fair and Fare' },
    { 'question': 'A group of guns or missile launchers operated together at one place', 'answer': 'Battery' },
    { 'question': 'A large bundle bound for storage or transport', 'answer': 'Bale' },
    { 'question': 'A large gathering of people of a particular type', 'answer': 'Bevy' },
    { 'question': 'An arrangement of flowers that is usually given as a present', 'answer': 'Bouquet' },
    { 'question': 'A family of young animals', 'answer': 'Brood' },
    { 'question': 'A group of things that have been hidden in a secret place', 'answer': 'Cache' },
    { 'question': 'A group of people, typically with vehicles or animals travelling together', 'answer': 'Caravan' },
    { 'question': 'A closed political meeting', 'answer': 'Caucus' },
    { 'question': 'An exclusive circle of people with a common purpose', 'answer': 'Clique' },
    { 'question': 'A group of followers hired to applaud at a performance', 'answer': 'Claque' },
    { 'question': 'A series of stars', 'answer': 'Constellation' },
    { 'question': 'A funeral procession', 'answer': 'Cortege' },
    { 'question': 'A group of worshippers', 'answer': 'Congregation' },
    { 'question': 'A herd or flock of animals being driven in a body', 'answer': 'Drove' },
    { 'question': 'A small fleet of ships or boats', 'answer': 'Flotilla' },
    { 'question': 'A small growth of trees without underbrush', 'answer': 'Grove' },
    { 'question': 'A community of people smaller than a village', 'answer': 'Hamlet' },
    { 'question': 'A group of cattle or sheep or other domestic mammals', 'answer': 'Herd' },
    { 'question': 'A large group of people', 'answer': 'Horde' },
    { 'question': 'A temporary police force', 'answer': 'Posse' },
    { 'question': 'A large number of fish swimming together', 'answer': 'Shoal' },
    { 'question': 'A strong and fast-moving stream of water or other liquid', 'answer': 'Torrent' },
    { 'question': 'One who is not sure about God???s existence', 'answer': 'Agnostic' },
    { 'question': 'A person who deliberately sets fire to a building', 'answer': 'Arsonist' },
    { 'question': 'One who does a thing for pleasure and not as a profession', 'answer': 'Amateur' },
    { 'question': 'One who can use either hand with ease', 'answer': 'Ambidextrous' },
    { 'question': 'One who makes an official examination of accounts', 'answer': 'Auditor' },
    { 'question': 'A person who believes in or tries to bring about a state of lawlessness', 'answer': 'Anarchist' },
    { 'question': 'A person who has changed his faith', 'answer': 'Apostate' },
    { 'question': 'One who does not believe in the existence of God', 'answer': 'Atheist' },
    { 'question': 'A person appointed by two parties to solve a dispute', 'answer': 'Arbitrator' },
    { 'question': 'One who leads an austere life', 'answer': 'Ascetic' },
    { 'question': 'An unconventional style of living', 'answer': 'Bohemian' },
    { 'question': 'One who is bad in spellings', 'answer': 'Cacographer' },
    { 'question': 'One who feeds on human flesh', 'answer': 'Cannibal' },
    { 'question': 'A person who is blindly devoted to an idea/ a person displaying aggressive or exaggerated patriotism', 'answer': 'Chauvinist' },
    { 'question': 'A critical judge of any art and craft', 'answer': 'Connoisseur' },
    { 'question': 'Persons living at the same time', 'answer': 'Contemporaries' },
    { 'question': 'One who is recovering health after illness', 'answer': 'Convalescent' },
    { 'question': 'A girl/woman who flirts with a man', 'answer': 'Coquette' },
    { 'question': 'A person who regards the whole world as his country', 'answer': 'Cosmopolitan' },
    { 'question': 'One who is a centre of attraction', 'answer': 'Cynosure' },
    { 'question': 'One who sneers at the beliefs of others', 'answer': 'Cynic' },
    { 'question': 'A leader or orator who espouses the cause of the common people', 'answer': 'Demagogue' },
    { 'question': 'A person having a sophisticated charm', 'answer': 'Debonair' },
    { 'question': 'A leader who sways his followers by his oratory', 'answer': 'Demagogue' },
    { 'question': 'A dabbler (not serious) in art, science and literature', 'answer': 'Dilettante' },
    { 'question': 'One who is for pleasure of eating and drinking', 'answer': 'Epicure' },
    { 'question': 'One who often talks of his achievements', 'answer': 'Egotist' },
    { 'question': 'Someone who leaves one country to settle in another', 'answer': 'Emigrant' },
    { 'question': 'A man who is womanish in his habits', 'answer': 'Effeminate' },
    { 'question': 'One who is hard to please (very selective in his habits)', 'answer': 'Fastidious' },
    { 'question': 'One who runs away from justice', 'answer': 'Fugitive' },
    { 'question': 'One who is filled with excessive enthusiasm in religious matters', 'answer': 'Fanatic' },
    { 'question': 'One who believes in fate', 'answer': 'Fatalist' },
    { 'question': 'A lover of good food', 'answer': 'Gourmand' },
    { 'question': 'Conferred as an honour', 'answer': 'Honorary' },
    { 'question': 'A person who acts against religion', 'answer': 'Heretic' },
    { 'question': 'A person of intellectual or erudite tastes', 'answer': 'Highbrow' },
    { 'question': 'A patient with imaginary symptoms and ailments', 'answer': 'Hypochondriac' },
    { 'question': 'A person who is controlled by wife', 'answer': 'Henpeck' },
    { 'question': 'One who shows sustained enthusiastic action with unflagging vitality', 'answer': 'Indefatigable' },
    { 'question': 'Someone who attacks cherished ideas or traditional institutions', 'answer': 'Iconoclast' },
    { 'question': 'One who does not express himself freely', 'answer': 'Introvert' },
    { 'question': 'Who behaves without moral principles', 'answer': 'Immoral' },
    { 'question': 'A person who is incapable of being tampered with', 'answer': 'Impregnable' },
    { 'question': 'One who is unable to pay his debts', 'answer': 'Insolvent' },
    { 'question': 'A person who is mentally ill', 'answer': 'Lunatic' },
    { 'question': 'A person who dislikes humankind and avoids human society', 'answer': 'Misanthrope' },
    { 'question': 'A person who is primarily concerned with making money at the expense of ethics', 'answer': 'Mercenary' },
    { 'question': 'Someone in love with himself', 'answer': 'Narcissist' },
    { 'question': 'One who collect coins as hobby', 'answer': 'Numismatist' },
    { 'question': 'A person who likes or admires women', 'answer': 'Philogynist' },
    { 'question': 'A lover of mankind', 'answer': 'Philanthropist' },
    { 'question': 'A person who speaks more than one language', 'answer': 'Polyglot' },
    { 'question': 'One who lives in solitude', 'answer': 'Recluse' },
    { 'question': 'Someone who walks in sleep', 'answer': 'Somnambulist' },
    { 'question': 'A person who is indifferent to the pains and pleasures of life', 'answer': 'Stoic' },
    { 'question': 'A scolding nagging bad-tempered woman', 'answer': 'Termagant' },
    { 'question': 'A person who shows a great or excessive fondness for one???s wife', 'answer': 'Uxorious' },
    { 'question': 'One who possesses outstanding technical ability in a particular art or field', 'answer': 'Virtuoso' },
    { 'question': 'A solemn procession, especially for a funeral', 'answer': 'Cortege' },
    { 'question': 'A poem of serious reflection, typically a lament for the dead', 'answer': 'Elegy' },
    { 'question': 'A phrase or form of words written in memory of a person who has died', 'answer': 'Epitaph' },
    { 'question': 'Killing of one???s son or daughter', 'answer': 'Filicide' },
    { 'question': 'Destruction or abortion of a fetus', 'answer': 'Foeticide' },
    { 'question': 'Killing of one???s brother or sister', 'answer': 'Fratricide' },
    { 'question': 'Killing of a large group of people', 'answer': 'Genocide' },
    { 'question': 'Killing of one person by another', 'answer': 'Homicide' },
    { 'question': 'Killing of infants', 'answer': 'Infanticide' },
    { 'question': 'Burial of a corpse in a grave or tomb', 'answer': 'Interment' },
    { 'question': 'Killing of one???s mother', 'answer': 'Matricide' },
    { 'question': 'A room or building in which dead bodies are kept', 'answer': 'Mortuary' },
    { 'question': 'A news article that reports the recent death of a person', 'answer': 'Obituary' },
    { 'question': 'Killing of a parent or other near relative', 'answer': 'Parricide' },
    { 'question': 'Killing of one???s father', 'answer': 'Patricide' },
    { 'question': 'An examination of a dead body to determine the cause of death', 'answer': 'Postmortem' },
    { 'question': 'Action of killing a king', 'answer': 'Regicide' },
    { 'question': 'Killing of one???s sister', 'answer': 'Sororicide' },
    { 'question': 'Act of intentionally causing one???s own death', 'answer': 'Suicide' },
    { 'question': 'Killing of one???s wife', 'answer': 'Uxoricide' },
    { 'question': 'The medieval forerunner of chemistry', 'answer': 'Alchemy' },
    { 'question': 'A person who presents a radio/television programme', 'answer': 'Anchor' },
    { 'question': 'One who studies the evolution of mankind', 'answer': 'Anthropologist' },
    { 'question': 'A person who is trained to travel in a spacecraft', 'answer': 'Astronaut' },
    { 'question': 'The scientific study of the physiology, structure, genetics, ecology, distribution, classification and economic importance of plants', 'answer': 'Botany' },
    { 'question': 'A person who draws or produces maps', 'answer': 'Cartographer' },
    { 'question': 'A person who writes beautiful writing', 'answer': 'Calligrapher' },
    { 'question': 'A person who composes the sequence of steps and moves for a performance of dance', 'answer': 'Choreographer' },
    { 'question': 'A person employed to drive a private or hired car', 'answer': 'Chauffeur' },
    { 'question': 'A person who introduces the performers or contestants in a variety show', 'answer': 'Compere' },
    { 'question': 'A keeper or custodian of a museum or other collection', 'answer': 'Curator' },
    { 'question': 'The branch of biology concerned with cyclical physiological phenomena', 'answer': 'Chronobiology' },
    { 'question': 'A secret or disguised way of writing', 'answer': 'Cypher' },
    { 'question': 'The study of statistics', 'answer': 'Demography' },
    { 'question': 'The use of the fingers and hands to communicate and convey ideas', 'answer': 'Dactylology' },
    { 'question': 'A person who sells and arranges cut flowers', 'answer': 'Florist' },
    { 'question': 'A line of descent traced continuously from an ancestor', 'answer': 'Genealogy' },
    { 'question': 'The therapeutic use of sunlight', 'answer': 'Heliotherapy' },
    { 'question': 'The art or practice of garden cultivation and management', 'answer': 'Horticulture' },
    { 'question': 'One who supervises in the examination hall', 'answer': 'Invigilator' },
    { 'question': 'The theory or philosophy of law', 'answer': 'Jurisprudence' },
    { 'question': 'A person who compiles dictionaries', 'answer': 'Lexicographer' },
    { 'question': 'The scientific study of the structure and diseases of teeth', 'answer': 'Odontology' },
    { 'question': 'One who presents a radio programme', 'answer': 'Radio Jockey' },
    { 'question': 'The art of effective or persuasive speaking or writing', 'answer': 'Rhetoric' },
    { 'question': 'The branch of science concerned with the origin, structure and composition of rocks', 'answer': 'Petrology' },
    { 'question': 'One who studies the elections and trends in voting', 'answer': 'Psephologist' },
    { 'question': 'An artist who makes sculptures.', 'answer': 'Sculptor' },
    { 'question': 'The scientific study of the behaviour, structure, physiology, classification and distribution of animals', 'answer': 'Zoology' },
    { 'question': 'The branch of physics concerned with the properties of sound', 'answer': 'Acoustics' },
    { 'question': 'The sound of Alligators', 'answer': 'Bellow' },
    { 'question': 'The sound of Deers', 'answer': 'Bell' },
    { 'question': 'The sound of Crows', 'answer': 'Caw' },
    { 'question': 'The sound of Geese', 'answer': 'Cackle' },
    { 'question': 'The sound of Hens', 'answer': 'Cluck' },
    { 'question': 'The sound of Dolphins', 'answer': 'Click' },
    { 'question': 'The sound of Frogs', 'answer': 'Croak' },
    { 'question': 'The sound of Crickets', 'answer': 'Creak' },
    { 'question': 'The sound of Monkeys', 'answer': 'Gibber' },
    { 'question': 'The sound of Camels', 'answer': 'Grunt' },
    { 'question': 'The sound of Owls', 'answer': 'Hoot' },
    { 'question': 'The sound of Penguins', 'answer': 'Honk' },
    { 'question': 'The sound of Cattle', 'answer': 'Moo' },
    { 'question': 'The sound of Horses', 'answer': 'Neigh' },
    { 'question': 'The sound of Nightingales', 'answer': 'Pipe' },
    { 'question': 'The sound of Ducks', 'answer': 'Quack' },
    { 'question': 'The sound of Parrots', 'answer': 'Screech' },
    { 'question': 'The sound of Rats', 'answer': 'Squeak' },
    { 'question': 'The sound of Birds', 'answer': 'Twitter' },
    { 'question': 'The sound of Elephants', 'answer': 'Trumpet' },
    { 'question': 'The sound of Mosquitoes', 'answer': 'Whine' },
]


export default oneWord
