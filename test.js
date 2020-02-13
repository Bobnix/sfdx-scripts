
module.exports = async function (org){
    const conn = org.getConnection();

    const query = 'Select Name, TrialExpirationDate from Organization';

    // Query the org
    const result = await conn.query(query);

    const orgName = result.records[0].Name;
    const trialExpirationDate = result.records[0].TrialExpirationDate;

    let outputString = `Hello! This is org: ${orgName}`;

    console.log(outputString);

    return outputString;
}