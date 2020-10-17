import { map } from 'lodash';
import { isEqual } from 'lodash';

map( [], a => a + 1 );

if (isEqual(true, true)) {
    console.log('lodash works');
}