// Dictionary data - 1000+ words
const dictionaryData = [
    "aardvark", "abacus", "abandon", "abandoned", "abbreviate", "abbreviation", "abdomen", "abdominal", "abduct", "abduction",
    "ability", "abnormal", "abnormality", "aboard", "abolish", "abolition", "abominable", "aboriginal", "abort", "abortion",
    "about", "above", "abrasion", "abrasive", "abreast", "abridge", "abroad", "abrupt", "abscess", "abscond",
    "absence", "absent", "absolute", "absolutely", "absolve", "absorb", "absorption", "abstain", "abstract", "absurd",
    "abundance", "abundant", "abuse", "abusive", "abyss", "academic", "academy", "accelerate", "acceleration", "accent",
    "accept", "acceptable", "acceptance", "access", "accessible", "accessory", "accident", "accidental", "acclaim", "acclimate",
    "accommodate", "accommodation", "accompaniment", "accompany", "accomplice", "accomplish", "accomplishment", "accord", "accordance", "accordingly",
    "accordion", "account", "accountable", "accountant", "accounting", "accredit", "accrue", "accumulate", "accumulation", "accuracy",
    "accurate", "accusation", "accuse", "accustom", "ace", "achieve", "achievement", "acid", "acidic", "acknowledge",
    "acknowledgment", "acne", "acorn", "acoustic", "acquaint", "acquaintance", "acquire", "acquisition", "acquit", "acquittal",
    "acre", "acrobat", "acrobatic", "acronym", "across", "acrylic", "act", "action", "activate", "activation",
    "active", "activist", "activity", "actor", "actress", "actual", "actuality", "actually", "acupuncture", "acute",
    "adage", "adamant", "adapt", "adaptation", "adapter", "add", "addicted", "addiction", "addition", "additional",
    "additive", "address", "adequate", "adhere", "adhesion", "adhesive", "adjacent", "adjective", "adjoining", "adjourn",
    "adjudicate", "adjudicator", "adjust", "adjustment", "administer", "administration", "administrative", "administrator", "admirable", "admiral",
    "admiration", "admire", "admission", "admit", "adolescent", "adopt", "adoption", "adorable", "adoration", "adore",
    "adrenaline", "adrift", "adult", "adulterate", "adulteration", "adultery", "advance", "advanced", "advancement", "advantage",
    "advantageous", "advent", "adventure", "adventurous", "adverb", "adversary", "adverse", "adversity", "advertise", "advertisement",
    "advertising", "advice", "advisable", "advise", "adviser", "advocate", "aerial", "aerobic", "aerobics", "aerodynamic",
    "aeronautics", "aerosol", "aerospace", "aesthetic", "afar", "affable", "affair", "affect", "affection", "affectionate",
    "affiliate", "affiliation", "affinity", "affirm", "affirmation", "affirmative", "affix", "afflict", "affliction", "affluent",
    "afford", "affordable", "affront", "afloat", "afraid", "afresh", "africa", "african", "after", "aftereffect",
    "afterlife", "aftermath", "afternoon", "afterthought", "afterward", "again", "against", "age", "aged", "agency",
    "agenda", "agent", "aggravate", "aggravation", "aggregate", "aggression", "aggressive", "aggressor,"
    , "agitate", "agitation", "agnostic", "ago", "agonize", "agony", "agree", "agreeable", "agreement",
    "agricultural", "agriculture", "ahead", "aid", "aide", "aids", "ail", "ailment", "aim", "aimless",
    "air", "airborne", "aircraft", "airfield", "airforce", "airline", "airliner", "airplane", "airport", "airtight",
    "airway", "airy", "aisle", "ajar", "akin", "alarm", "alarming", "alas", "albeit", "album",
    "alchemy", "alcohol", "alcoholic", "alcove", "alert", "algebra", "algorithm", "alias", "alibi", "alien",
    "alienate", "alienation", "alight", "align", "alignment", "alike", "alive", "alkali", "alkaline", "all",
    "allay", "allegation", "allege", "allegiance", "allegorical", "allegory", "allergic", "allergy", "alleviate", "alley",
    "alliance", "allied", "alligator", "allocate", "allocation", "allot", "allotment", "allow", "allowance", "alloy",
    "allude", "allure", "allusion", "ally", "almanac", "almighty", "almond", "almost", "aloft", "alone",
    "along", "alongside", "aloof", "aloud", "alphabet", "alphabetical", "alphabetically", "already", "also", "altar",
    "alter", "alteration", "alternate", "alternation", "alternative", "alternatively", "although", "altitude", "altogether", "altruism",
    "altruistic", "aluminum", "always", "amalgamate", "amalgamation", "amass", "amateur", "amateurish", "amaze", "amazement",
    "amazing", "ambassador", "amber", "ambidextrous", "ambiguity", "ambiguous", "ambition", "ambitious", "ambivalence", "ambivalent",
    "amble", "ambulance", "ambush", "ameliorate", "amelioration", "amenable", "amend", "amendment", "amenity", "amiable",
    "amicable", "amid", "amidst", "amiss", "amity", "ammonia", "ammunition", "amnesia", "amnesty", "among",
    "amongst", "amoral", "amount", "amphibian", "amphibious", "ample", "amplification", "amplifier", "amplify", "amplitude",
    "amply", "amputate", "amputation", "amuse", "amusement", "amusing", "analgesic", "analogous", "analogy", "analyse",
    "analysis", "analyst", "analytic", "analytical", "analyze", "anarchist", "anarchy", "anatomical", "anatomy", "ancestor",
    "ancestral", "ancestry", "anchor", "anchorage", "ancient", "ancillary", "and", "anecdotal", "anecdote", "anemia",
    "anemic", "anesthesia", "anesthetic", "anew", "angel", "anger", "angle", "angler", "anglicize", "angry",
    "anguish", "angular", "animal", "animate", "animation", "animosity", "ankle", "annals", "annex", "annexation",
    "annihilate", "annihilation", "anniversary", "announce", "announcement", "announcer", "annoy", "annoyance", "annoying", "annual",
    "annually", "annuity", "annul", "annulment", "anode", "anoint", "anomalous", "anomaly", "anonymity", "anonymous",
    "another", "answer", "ant", "antagonism", "antagonist", "antagonistic", "antagonize", "antarctic", "ante", "anteater",
    "antecedent", "antelope", "antenna", "anthem", "anthology", "anthropological", "anthropologist", "anthropology", "antibiotic", "antibody",
    "anticipate", "anticipation", "anticlockwise", "antics", "antidote", "antifreeze", "antique", "antiquity", "antiseptic", "antisocial",
    "antithesis", "antler", "antonym", "anvil", "anxiety", "anxious", "any", "anybody", "anyhow", "anymore",
    "anyone", "anything", "anyway", "anywhere", "aorta", "apart", "apartment", "apathetic", "apathy", "ape",
    "aperitif", "aperture", "apex", "aphid", "aphorism", "apiary", "aplomb", "apocalypse", "apocalyptic", "apocryphal",
    "apologetic", "apologize", "apology", "apoplexy", "apostle", "apostrophe", "appall", "appalling", "apparatus", "apparel",
    "apparent", "apparently", "appeal", "appealing", "appear", "appearance", "appease", "appeasement", "append", "appendage",
    "appendectomy", "appendicitis", "appendix", "appetite", "appetizer", "appetizing", "applaud", "applause", "apple", "appliance",
    "applicable", "applicant", "application", "applied", "applique", "apply", "appoint", "appointee", "appointment", "apportion",
    "apportionment", "appraisal", "appraise", "appreciable", "appreciate", "appreciation", "appreciative", "apprehend", "apprehension", "apprehensive",
    "apprentice", "apprenticeship", "apprise", "approach", "approachable", "approbation", "appropriate", "appropriation", "approval", "approve",
    "approximate", "approximation", "apricot", "april", "apron", "apt", "aptitude", "aquarium", "aquatic", "aqueduct",
    "aquiline", "arab", "arabic", "arable", "arbiter", "arbitrage", "arbitrary", "arbitrate", "arbitration", "arbitrator",
    "arbor", "arboreal", "arboretum", "arc", "arcade", "arcane", "arch", "archaeological", "archaeologist", "archaeology",
    "archaic", "archangel", "archbishop", "archdeacon", "archdiocese", "archduke", "archer", "archery", "archetype", "archipelago",
    "architect", "architectural", "architecture", "archive", "archivist", "ardent", "ardor", "arduous", "area", "arena",
    "arguable", "arguably", "argue", "argument", "argumentative", "arid", "aristocracy", "aristocrat", "aristocratic", "arithmetic",
    "arithmetical", "ark", "arm", "armada", "armadillo", "armament", "armature", "armchair", "armed", "armful",
    "armistice", "armor", "armory", "armpit", "arms", "army", "aroma", "aromatic", "around", "arouse",
    "arraign", "arraignment", "arrange", "arrangement", "array", "arrears", "arrest", "arrival", "arrive", "arrogance",
    "arrogant", "arrow", "arsenal", "arsenic", "arson", "arsonist", "art", "arterial", "artery", "artful",
    "arthritic", "arthritis", "arthropod", "artichoke", "article", "articulate", "articulation", "artifact", "artifice", "artificial",
    "artillery", "artisan", "artist", "artistic", "artistry", "arts", "artwork", "as", "asbestos", "ascend",
    "ascendancy", "ascent", "ascertain", "ascetic", "asceticism", "ascii", "ascribe", "aseptic", "ash", "ashamed",
    "ashen", "ashes", "ashore", "ashtray", "ashy", "aside", "asinine", "ask", "askance", "askew",
    "asleep", "aspect", "aspen", "aspersion", "asphalt", "asphyxiate", "asphyxiation", "aspiration", "aspire", "aspirin",
    "ass", "assail", "assailant", "assassin", "assassinate", "assassination", "assault", "assay", "assemblage", "assemble",
    "assembly", "assent", "assert", "assertion", "assertive", "assess", "assessment", "assessor", "asset", "assiduous",
    "assign", "assignation", "assignment", "assimilate", "assimilation", "assist", "assistance", "assistant", "associate", "association",
    "assonance", "assorted", "assortment", "assuage", "assume", "assumption", "assurance", "assure", "assured", "asterisk",
    "asteroid", "asthma", "asthmatic", "astonish", "astonishing", "astonishment", "astound", "astounding", "astray", "astride",
    "astringent", "astrologer", "astrological", "astrology", "astronaut", "astronomer", "astronomical", "astronomy", "astute", "asunder"
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const binarySearchDict = document.getElementById('binarySearchDict');
const greedySearchDict = document.getElementById('greedySearchDict');
const speedControl = document.getElementById('speedControl');
const wordSuggestions = document.getElementById('wordSuggestions');

// Stats elements
const binarySteps = document.getElementById('binarySteps');
const binaryComparisons = document.getElementById('binaryComparisons');
const binaryTime = document.getElementById('binaryTime');
const greedySteps = document.getElementById('greedySteps');
const greedyComparisons = document.getElementById('greedyComparisons');
const greedyTime = document.getElementById('greedyTime');

// Results elements
const binaryStepsResult = document.getElementById('binaryStepsResult');
const binaryComparisonsResult = document.getElementById('binaryComparisonsResult');
const binaryTimeResult = document.getElementById('binaryTimeResult');
const greedyStepsResult = document.getElementById('greedyStepsResult');
const greedyComparisonsResult = document.getElementById('greedyComparisonsResult');
const greedyTimeResult = document.getElementById('greedyTimeResult');
const stepsWinner = document.getElementById('stepsWinner');
const comparisonsWinner = document.getElementById('comparisonsWinner');
const timeWinner = document.getElementById('timeWinner');
const overallWinner = document.getElementById('overallWinner');

// Sort dictionary
dictionaryData.sort();

// Initialize visualization
function initDictionaries() {
    binarySearchDict.innerHTML = '';
    greedySearchDict.innerHTML = '';
    
    dictionaryData.forEach((word, index) => {
        const binaryWordElement = document.createElement('div');
        binaryWordElement.classList.add('word');
        binaryWordElement.textContent = word;
        binaryWordElement.id = `binary-${index}`;
        binarySearchDict.appendChild(binaryWordElement);
        
        const greedyWordElement = document.createElement('div');
        greedyWordElement.classList.add('word');
        greedyWordElement.textContent = word;
        greedyWordElement.id = `greedy-${index}`;
        greedySearchDict.appendChild(greedyWordElement);
    });
}

// Initialize word suggestions
function initWordSuggestions() {
    const suggestedWords = [
        "arrow", "arsenal", "arsenic", "arson", "arsonist", "art", "arterial", "artery", "artful",
    "arthritic", "arthritis", "arthropod",
    ];
    
    wordSuggestions.innerHTML = '';
    suggestedWords.forEach(word => {
        const suggestionElement = document.createElement('span');
        suggestionElement.classList.add('suggestion');
        suggestionElement.textContent = word;
        suggestionElement.addEventListener('click', () => {
            searchInput.value = word;
        });
        wordSuggestions.appendChild(suggestionElement);
    });
}

// Reset visualization
function resetVisualization() {
    // Reset stats
    binarySteps.textContent = '0';
    binaryComparisons.textContent = '0';
    binaryTime.textContent = '0';
    greedySteps.textContent = '0';
    greedyComparisons.textContent = '0';
    greedyTime.textContent = '0';
    
    // Reset results
    binaryStepsResult.textContent = '-';
    binaryComparisonsResult.textContent = '-';
    binaryTimeResult.textContent = '-';
    greedyStepsResult.textContent = '-';
    greedyComparisonsResult.textContent = '-';
    greedyTimeResult.textContent = '-';
    stepsWinner.textContent = '-';
    comparisonsWinner.textContent = '-';
    timeWinner.textContent = '-';
    overallWinner.textContent = '-';
    
    // Reset word classes
    document.querySelectorAll('.word').forEach(wordElement => {
        wordElement.classList.remove('highlighted', 'current', 'found', 'not-found');
    });
}

// Binary Search Animation
async function binarySearchAnimation(target) {
    resetVisualization();
    
    const delay = parseInt(speedControl.value);
    let steps = 0;
    let comparisons = 0;
    let found = false;
    let left = 0;
    let right = dictionaryData.length - 1;
    
    const startTime = performance.now();
    
    while (left <= right) {
        steps++;
        binarySteps.textContent = steps.toString();
        
        // Clear previous highlights
        document.querySelectorAll('.binary-highlighted').forEach(el => {
            el.classList.remove('binary-highlighted', 'highlighted');
        });
        
        // Highlight current search range
        for (let i = left; i <= right; i++) {
            const element = document.getElementById(`binary-${i}`);
            element.classList.add('highlighted', 'binary-highlighted');
        }
        
        await new Promise(resolve => setTimeout(resolve, delay));
        
        const mid = Math.floor((left + right) / 2);
        const midElement = document.getElementById(`binary-${mid}`);
        midElement.classList.add('current');
        
        comparisons++;
        binaryComparisons.textContent = comparisons.toString();
        
        const comparison = target.localeCompare(dictionaryData[mid]);
        
        await new Promise(resolve => setTimeout(resolve, delay));
        
        if (comparison === 0) {
            midElement.classList.add('found');
            found = true;
            break;
        } else if (comparison < 0) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        
        midElement.classList.remove('current');
    }
    
    const endTime = performance.now();
    const timeTaken = Math.round(endTime - startTime);
    
    binaryTime.textContent = timeTaken.toString();
    
    if (!found) {
        document.querySelectorAll('.binary-highlighted').forEach(el => {
            el.classList.remove('binary-highlighted', 'highlighted');
        });
        document.getElementById(`binary-0`).classList.add('not-found');
    }
    
    return {
        steps,
        comparisons,
        timeTaken,
        found,
        timeTaken
    };
}

// Greedy Search Animation
async function greedySearchAnimation(target) {
    resetVisualization();
    
    const delay = parseInt(speedControl.value);
    let steps = 0;
    let comparisons = 0;
    let found = false;
    let position = 0;
    
    const startTime = performance.now();
    
    // Estimate initial jump based on first letter
    if (target.length > 0 && dictionaryData.length > 0) {
        const targetFirstChar = target.charAt(0).toLowerCase();
        const firstWordFirstChar = dictionaryData[0].charAt(0).toLowerCase();
        const lastWordFirstChar = dictionaryData[dictionaryData.length - 1].charAt(0).toLowerCase();
        
        // If target is within dictionary range
        if (targetFirstChar >= firstWordFirstChar && targetFirstChar <= lastWordFirstChar) {
            const alphabetRange = lastWordFirstChar.charCodeAt(0) - firstWordFirstChar.charCodeAt(0) + 1;
            const targetOffset = targetFirstChar.charCodeAt(0) - firstWordFirstChar.charCodeAt(0);
            position = Math.floor((targetOffset / alphabetRange) * dictionaryData.length);
        }
    }
    
    while (position >= 0 && position < dictionaryData.length) {
        steps++;
        greedySteps.textContent = steps.toString();
        
        // Clear previous highlights
        document.querySelectorAll('.greedy-highlighted').forEach(el => {
            el.classList.remove('greedy-highlighted', 'highlighted');
        });
        
        const element = document.getElementById(`greedy-${position}`);
        element.classList.add('highlighted', 'greedy-highlighted', 'current');
        
        comparisons++;
        greedyComparisons.textContent = comparisons.toString();
        
        await new Promise(resolve => setTimeout(resolve, delay));
        
        const currentWord = dictionaryData[position];
        const comparison = target.localeCompare(currentWord);
        
        if (comparison === 0) {
            element.classList.add('found');
            found = true;
            break;
        } else {
            element.classList.remove('current');
            
            // Make a "greedy" jump based on comparison
            if (comparison < 0) {
                // Target comes before current word
                const jumpSize = Math.max(1, Math.floor((position - 0) / 4));
                position -= jumpSize;
            } else {
                // Target comes after current word
                const jumpSize = Math.max(1, Math.floor((dictionaryData.length - position) / 4));
                position += jumpSize;
            }
            
            // Ensure we're within bounds
            if (position < 0) position = 0;
            if (position >= dictionaryData.length) position = dictionaryData.length - 1;
        }
    }
    
    const endTime = performance.now();
    const timeTaken = Math.round(endTime - startTime);
    
    greedyTime.textContent = timeTaken.toString();
    
    if (!found) {
        document.querySelectorAll('.greedy-highlighted').forEach(el => {
            el.classList.remove('greedy-highlighted', 'highlighted');
        });
        document.getElementById(`greedy-0`).classList.add('not-found');
    }
    
    return {
        steps,
        comparisons,
        timeTaken,
        found
    };
}

// Update results table
function updateResultsTable(binaryResults, greedyResults) {
    binaryStepsResult.textContent = binaryResults.steps;
    binaryComparisonsResult.textContent = binaryResults.comparisons;
    binaryTimeResult.textContent = binaryResults.timeTaken;
    
    greedyStepsResult.textContent = greedyResults.steps;
    greedyComparisonsResult.textContent = greedyResults.comparisons;
    greedyTimeResult.textContent = greedyResults.timeTaken;
    
    // Determine winners
    stepsWinner.textContent = binaryResults.steps < greedyResults.steps ? "Binary Search" : 
                              binaryResults.steps > greedyResults.steps ? "Greedy Search" : "Tie";
    
    comparisonsWinner.textContent = binaryResults.comparisons < greedyResults.comparisons ? "Binary Search" : 
                                   binaryResults.comparisons > greedyResults.comparisons ? "Greedy Search" : "Tie";
    
    timeWinner.textContent = binaryResults.timeTaken < greedyResults.timeTaken ? "Binary Search" : 
                            binaryResults.timeTaken > greedyResults.timeTaken ? "Greedy Search" : "Tie";
    
    // Overall winner
    let binaryPoints = 0;
    let greedyPoints = 0;
    
    if (binaryResults.steps < greedyResults.steps) binaryPoints++;
    else if (greedyResults.steps < binaryResults.steps) greedyPoints++;
    
    if (binaryResults.comparisons < greedyResults.comparisons) binaryPoints++;
    else if (greedyResults.comparisons < binaryResults.comparisons) greedyPoints++;
    
    if (binaryResults.timeTaken < greedyResults.timeTaken) binaryPoints++;
    else if (greedyResults.timeTaken < binaryResults.timeTaken) greedyPoints++;
    
    if (binaryPoints > greedyPoints) {
        overallWinner.textContent = "Binary Search";
        overallWinner.classList.add("winner");
    } else if (greedyPoints > binaryPoints) {
        overallWinner.textContent = "Greedy Search";
        overallWinner.classList.add("winner");
    } else {
        overallWinner.textContent = "Tie";
    }
}

// Handle search
async function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === "") {
        alert("Please enter a word to search");
        return;
    }
    
    // Show loading indicator
    const loadingIndicator = document.querySelector('.loading');
    loadingIndicator.classList.remove('hidden');
    searchButton.disabled = true;
    
    // Wait a bit to ensure DOM updates before starting animations
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Perform both searches in parallel
    const [binaryResults, greedyResults] = await Promise.all([
        binarySearchAnimation(searchTerm),
        greedySearchAnimation(searchTerm)
    ]);
    
    // Update results table
    updateResultsTable(binaryResults, greedyResults);
    
    // Hide loading indicator
    loadingIndicator.classList.add('hidden');
    searchButton.disabled = false;
    
    // Scroll to results
    document.querySelector('.result-comparison').scrollIntoView({ behavior: 'smooth' });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    initDictionaries();
    initWordSuggestions();
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});