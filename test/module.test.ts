import { getNuxt, setupTest } from '@nuxt/test-utils'
import { ChannelEnum } from '../src/runtime/api'

describe('module', () => {
  setupTest({
    testDir: __dirname,
    fixture: '../example',
    server: true,
    config: {
      dev: true,
      adyen: {
        merchantAccount: 'test',
        returnUrl: 'test',
        checkoutEndpoint: 'test',
        apiKey: 'test',
        environment: 'TEST',
        origin: 'test',
        channel: ChannelEnum.Web,
        clientKey: 'test'
      }
    }
  })

  test('should have config with Adyen options', () => {
    const { merchantAccount, environment, clientKey, returnUrl, checkoutEndpoint, apiKey, origin, channel } = getNuxt().options.adyen

    expect(merchantAccount).toBeDefined()
    expect(returnUrl).toBeDefined()
    expect(checkoutEndpoint).toBeDefined()
    expect(channel).toBeDefined()
    expect(origin).toBeDefined()
    expect(apiKey).toBeDefined()
    expect(environment).toBeDefined()
    expect(clientKey).toBeDefined()
  })
})
