import { LibStorefront } from '@grupakmk/libstorefront';
import { AssortmentListPlugin } from '../../src';
import { AssortmentListService } from '../../src/service';

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        AssortmentListPlugin
    ]
// }, 'https://api.meringer.staging.grupakmk.pl');
}, 'http://localhost:9001');

(async () => {
    await LSF.UserService.login('joanna.kocur+8@grupakmk.pl', 'Haslodotestowania1!');
    LSF.get(AssortmentListService).getAssortmentList()
        .then(res => {
            debugger
        })
        .catch(err => {
            debugger;
        });

})();
