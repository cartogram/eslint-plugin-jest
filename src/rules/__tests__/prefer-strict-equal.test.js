import { RuleTester } from 'eslint';
import rule from '../prefer-strict-equal';

const ruleTester = new RuleTester();

ruleTester.run('prefer-strict-equal', rule, {
  valid: [
    'expect(something).toStrictEqual(somethingElse);',
    "a().toEqual('b')",
    'expect(a);',
  ],
  invalid: [
    {
      code: 'expect(something).toEqual(somethingElse);',
      errors: [{ messageId: 'useToStrictEqual', column: 19, line: 1 }],
      output: 'expect(something).toStrictEqual(somethingElse);',
    },
  ],
});
