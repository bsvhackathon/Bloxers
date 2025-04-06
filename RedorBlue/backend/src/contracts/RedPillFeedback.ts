// @ts-nocheck

import {
    SmartContract,
    method,
    prop,
    assert,
    PubKey,
    Sig,
    SigHash,
    hash256,
    Sha256,
    String,
} from 'scrypt-ts'

// Allows Alice and Bob to achieve a coin flip
// Alice picks a number (zero or one) and hides it with a nonce behind a hash
// Alice constructs the contract with an offer for Bob
// Alice can cancel or Bob can reject and the coins go back to Alice
// Bob can accept by picking a number (zero or one) and revealing it, and doubling the money
// Alice can reveal her original number. If they are the same she wins, if they are different Bob wins
// If Alice does not reveal her secret after Bob accepts then Bob can win after a timeout
export default class RedPillFeedback extends SmartContract {
    @prop(true)
    aliceHash: Sha256

    @prop(true)
    timeout: bigint

    @prop(true)
    alice: PubKey

    @prop(true)
    bob: PubKey

    // TODO: make approvedDoctor an array
    // TODO: add rewardFee and rewardFunds arguments
    constructor(pillMaker: PubKey, approvedDoctor: PubKey, pillMakerHash: Sha256, symptoms: String[]) {
        super(...arguments)
        this.pillMakerHash = pillMakerHash
        this.pillMaker = alice
        this.approvedDoctor = approvedDoctor
        
        this.symptomsPositive = {}
        this.symptomsNegative = {}

        // Iterate over the array
        symptoms.forEach(item => {
            symptomsPositive[item] = 0; // Or set any value you want
            symptomsNegative[item] = 0
        });
    }

    checkArrayOfSigs() {
        this.users.forEach((user) => {
            const isValid = this.checkSig
        })
    }

    // Bob can accept the offer by doubling the money in the contract and adding his number
    // red = 1, blue = 0
    @method(SigHash.ANYONECANPAY_SINGLE)
    public addSurvey(sig: Sig, symptomSurvey: Array[String], answer: bigint) {
        
        let validSig1 = this.checkSig(sig, this.approvedDoctor);
    
        if (validSignatures >= 1){
            console.log('Transaction authorized');
        } else {
            throw new Error('Unauthorized signature')
        }

        symptomSurvey.forEach((item, index) => {
            dict[item] = index; // Set the index as the value
        });

        // Increment the state to 1 and save user's number
        this.bobNumber = bobNumber
        
        if (this.bobAnswered == true && this.chrisAnswered == true && this.danielleAnswered == true){
            this.contractState = 1n
        } 

        // TODO: generate pdf report and set it as currentReport
        this.currentReport;

        // TODO: reward doctor for submitting a survey

        const output = this.buildStateOutput(this.ctx.utxo.value * 2n)
        const hashOutputs = hash256(output)
        assert(this.ctx.hashOutputs === hashOutputs, 'Bob must double the money in the contract')
    }

    // TODO: add getReport function

    // TODO: give pillMaker ability to add more rewardFunds to the smart contract
}
