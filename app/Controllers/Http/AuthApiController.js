'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with authapis
 */
class AuthApiController {
  /**
   * Show a list of all authapis.
   * GET authapis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async login ({ request, response, view }) {
    response.json({
      "status": "success",
      "data": {
          "user": {
              "id": 31,
              "first_name": "John",
              "last_name": "Smith",
              "email": "john.smith@gmail.com",
              "email_verified_at": "2020-04-14T23:30:36.000000Z",
              "type": "user",
              "status": "approved",
              "created_at": "2020-04-14T23:29:29.000000Z",
              "updated_at": "2020-04-14T23:30:36.000000Z"
          },
          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOWM1M2YxNDI5ZTlkMWRjZjUxYWNiNDA5OWVmYmJiMDQ2NzI4OTYwNDU4ZjYzNmRhZmY3YmExMmE0YjcyYjQ5MzI2NmMzOGY0YTllMWNkNWUiLCJpYXQiOjE1ODY5ODAyOTIsIm5iZiI6MTU4Njk4MDI5MiwiZXhwIjoxNjE4NTE2MjkyLCJzdWIiOiIzMSIsInNjb3BlcyI6W119.UizFAOQ0Nwd8waUd6vva30s9c6ttATZ2omzRa79q_XcNoqNLPv3JzvyMOvJQG_nAqqBHHHjkzCJMielxOa5kGfYbY94mJORq6k-Fr2FlCamt3hwP2SNe5igroxkZCfIYlyUde2ygLpmU-Hvc9ihAsu4IBvxxyD_Ylue-gBeGGUvsrVYSaWXqFI6gg_ZCmHZfrfGqrMlJXl6lzZRXxnljHoRj8QJMSXxuebWCHvaz75HR4Wn503chjHM9uuQAsGkFPQRYZyKDNxmr0o3IG7LxfXhFFKh6aKHAsS3DL1v_AclpFXCxqwRbmfl0h_c7MK5EuBvOh3vbu756PerYu_CylVqmo85lQ-jFqH7qxtNjlbT6WlMRO0oxFm47zIHUW0fkDBkuRPSscGoE0cajrNxmnQi6sLUwgjCg_4Oi2iiLJpeQ92bhxAudbq_PLulQTTsFljCQLd8LQghjuyEJBofSSefEEME566wtK9st3Fr2Tobv5K2HFOVTerQLzv6UlPjyuxxx-zC9Rhy1Xm9FXhFCJc5yw2xaKEffnSiCUYzM8Q1hl2MzRteaQAgcTr4YzexgDfMN9n5SL94RxtQe1NHT8NvHGqgdKFTcU7djFtoqdJUHlQ_4oVCLABtkixyPpa1Ei07V8cqj_Ut7oO0ZhWpxM0hsOZ0kVW3B81BHzaoDVFI"
      }
    });
  }

  async register({ request, response, view }) {
    response.json({
      "status": "success",
      "data": {
          "user": {
              "first_name": "Jane",
              "last_name": "Bane",
              "email": "jane.bane@gmail.com",
              "type": "user",
              "status": "approved",
              "updated_at": "2020-04-15T20:33:08.000000Z",
              "created_at": "2020-04-15T20:33:08.000000Z",
              "id": 32
          }
      }
    });
  }
}

module.exports = AuthApiController
