let express = require("express");
let router = express.Router();
const Contributor = require("../model/Contributor");

module.exports = (app) => {
    app.post("/members", (req, res) => {
        let member = new Contributor();
          // Save the request body as an object called record
            // let record = {
                // _id: req.body.id,
                member.title = req.body.title,
                member.name = req.body.name,
                member.address = req.body.address,
                member.phoneNumber = req.body.phoneNumber,
                member.email = req.body.email,
                member.number_of_shares_purchased = req.body.number_of_shares_purchased,
                member.bank_name = req.body.bank_name,
                member.bank_account_number = req.body.bank_account_number,
                member.bvn = req.body.bvn,
                member.name_of_next_of_kin = req.body.name_of_next_of_kin,
                member.relationship_to_nok = req.body.relationship,
                member.address_of_nok = req.body.address_of_nok,
                member.phoneNumber_of_Nok = req.body.phoneNumber_of_nok,
                member.email_of_nok = req.body.email_of_nok,
                member.creation_date = req.body.creation_date
            // };

            member.save((err, savedMember) => {
                if (err) {
                    res.status(500).send({Error:`Error! Could Not Save Data`})
                } else {
                    res.status(200).send(savedMember)
                }
            });
    });

    app.get("/members", (req, res) => {
        Contributor.find({}, (err, members) => {
            if (err) {
                res.status(500).send({error:`Could not get member list`});
            } else {
                // console.log(res)
                // res.headers("Access-Control-Allow-Origin", "http://localhost:3000");
                // res.headers("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.status(200).send(members);
            }
        });
    });

    app.put("/members/:memberId", (req, res) => {
        Contributor.findOne({"_id": req.body.memberId}, (err, member) => {
            if (err) {
                res.status(500).send({error:`Could Not Update Member Info`})
            } else {
                Contributor.updateOne({"_id": req.body.memberId}, {$addToSet:{members: member._id}}, (err, member) => {
                    if (err) {
                        res.status(500).send({error: `Could Not Find Item`});
                        
                    } else {
                        res.status(200).send(member);
                    }
                })
            }
        })
    })

    app.delete("/members/:memberName", (req, res) => {
        Contributor.deleteOne({"name": req.params.memberName}, (err, members) => {
            if (err) {
                res.status(500).send({error:`Error! Could Not Delete Item`});
            } else {
                res.status(200).send({message:`Successfully Deleted`, members});
            };
        });
    })
}