const DATA = [
    {
        FamilyName: 'Емелин',
        Region: '79000',
        RegionName: 'Республика Адыгея',
        InsuranceOrganizationCode: '01003',
        InsuranceOrganization: 'ФИЛИАЛ АКЦИОНЕРНОГО ОБЩЕСТВА ВТБ МЕДИЦИНСКОЕ СТРАХОВАНИЕ В РЕСПУБЛИКЕ АДЫГЕЯ',
        UnitedPolicyNumber: '3210987654321098',
        PolicyType: 'Полис ОМС единого образца',
        StartDate: '2017-05-05',
        InsuranceRepresentativePhoneNum: '8(8772)59-32-01',
        TfomsContactCenterHotlinePhoneNum: '8(8772)57-04-65',
    }, {
        FamilyName: 'Пушкин',
        Region: '12345',
        RegionName: 'Республика Адыгея',
        InsuranceOrganizationCode: '11111',
        InsuranceOrganization: 'ФИЛИАЛ АКЦИОНЕРНОГО ОБЩЕСТВА ВТБ МЕДИЦИНСКОЕ СТРАХОВАНИЕ В РЕСПУБЛИКЕ АДЫГЕЯ',
        UnitedPolicyNumber: '3210987654321098',
        PolicyType: 'Полис ОМС единого образца',
        StartDate: '1812-12-12',
        InsuranceRepresentativePhoneNum: '8(8772)59-32-01',
        TfomsContactCenterHotlinePhoneNum: '8(8772)57-04-65',
    }, {
        FamilyName: 'Есенин',
        Region: '99999',
        RegionName: 'Республика Удмуртия',
        InsuranceOrganizationCode: '98765',
        InsuranceOrganization: 'ФИЛИАЛ АКЦИОНЕРНОГО ОБЩЕСТВА ВТБ МЕДИЦИНСКОЕ СТРАХОВАНИЕ В РЕСПУБЛИКЕ АДЫГЕЯ',
        UnitedPolicyNumber: '3210987654321098',
        PolicyType: 'Полис ОМС единого образца',
        StartDate: '1919-08-06',
        InsuranceRepresentativePhoneNum: '8(8772)59-32-01',
        TfomsContactCenterHotlinePhoneNum: '8(8772)57-04-65',
    }, {
        FamilyName: 'Куприн',
        Region: '99965',
        RegionName: 'Ивановская область',
        InsuranceOrganizationCode: '11123',
        InsuranceOrganization: 'ФИЛИАЛ АКЦИОНЕРНОГО ОБЩЕСТВА ВТБ МЕДИЦИНСКОЕ СТРАХОВАНИЕ В ИВАНОВСКОЙ ОБЛАСТИ',
        UnitedPolicyNumber: '3210987654321098',
        PolicyType: 'Полис ОМС единого образца',
        StartDate: '1988-08-06',
        InsuranceRepresentativePhoneNum: '8(8772)59-32-01',
        TfomsContactCenterHotlinePhoneNum: '8(8772)57-04-65',
    },
];

const MAX = 100;
const WAIT = 70;
const ERROR = 90;

function processQueue(queue) {
    console.log('QUEUE', queue);
    queue.forEach(element => {
        const percent = Math.random() * MAX;
        // console.log('percent', percent);
        // console.log('element', JSON.stringify(element));
        if (element.Result !== 'NoResponse') {
            return;
        }
        if (percent <= WAIT) {
            return;
        }
        if (percent >= ERROR) {
            element.Result = 'NotIdentified';
            return;
        }
        const filter = DATA.filter((item) => item.FamilyName === element.FamilyName);
        // console.log('filter', JSON.stringify(filter));
        if (filter.length === 0) {
            element.Result = 'NotIdentified';
            return;
        }
        element.Result = 'Identified';
        element.Payload = filter[0];
    });
    // console.log('QUEUE', queue);
}

module.exports = processQueue;