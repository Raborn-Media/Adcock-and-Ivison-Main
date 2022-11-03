module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        fontColor: {
          colors: [
            { 
              color: "rgb(0,45,98)", 
              label: "Blue"
            },
            {
              color: 'hsl(0, 0%, 0%)',
              label: 'Black'
            },
            {
              color: 'hsl(0, 0%, 30%)',
              label: 'Dim grey'
            },
            {
              color: 'hsl(0, 0%, 60%)',
              label: 'Grey'
            },
            {
              color: 'hsl(0, 0%, 90%)',
              label: 'Light grey'
            },
            {
              color: 'hsl(0, 0%, 100%)',
              label: 'White',
              hasBorder: true
            },

          ],
        },
        fontFamily: {
          options: [
            "Poppins"
          ],
          supportAllValues: false
        },
        toolbar: {
          items: [
            'bold',
            'italic',
            'fontColor',
            'fontFamily',
            'underline',
            'fontSize',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'alignment',
            'outdent',
            'indent',
            'horizontalLine',
            '|',
            'StrapiMediaLib',
            'insertTable',
            'blockQuote',
            'mediaEmbed',
            'link',
            '|',
            'specialCharacters',
            '|',
            'heading',
            "fullScreen",
            'undo',
            'redo'
          ]
        },
        fontSize: {
          options: [
              9,
              11,
              13,
              16,
              17,
              19,
              21,
              27,
              35,
          ],
          supportAllValues: false
        },
      },
    },
  },
  "generate-data": {
    enabled: true,
  },
  email: {
    config: {
      provider: "strapi-provider-email-sendinblue",
      providerOptions: {
        sendinblue_api_key: env(
          "SIB_API_KEY",
          "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"
        ),
        sendinblue_default_replyto: env(
          "SIB_DEFAULT_REPLY_TO",
          "no-reply@adcockandivison.com"
        ),
        sendinblue_default_from: env(
          "SIB_DEFAULT_FROM",
          "no-reply@adcockandivison.com"
        ),
        sendinblue_default_from_name: env(
          "SIB_DEFAULT_FROM_NAME",
          "Adcock & Ivison PLLC"
        ),
      },
    },
  },
  ezforms: {
    config: {
      enableFormName: true,
      captchaProvider: {
        name: "none",
        // config: {
        //   secretKey: "6LezWnIiAAAAABTL5WCtMw0bkM-Xw13N9seAulBG",
        //   minimumScore: 0.5,
        // },
      },
      notificationProviders: [
        {
          name: "email",
          enabled: true,
          config: {
            subject: "New Form Submission from Adcock & Ivison Website",
            from: "no-reply@adcockandivison.com",
          },
        },
        {
          provider: "strapi-provider-email-sendinblue",
          enabled: true,
          config: {
            sendinblue_api_key: env(
              "SIB_API_KEY",
              "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"
            ),
            sendinblue_default_replyto: env(
              "SIB_DEFAULT_REPLY_TO",
              "no-reply@adcockandivison.com"
            ),
            sendinblue_default_from: env(
              "SIB_DEFAULT_FROM",
              "no-reply@adcockandivison.com"
            ),
            sendinblue_default_from_name: env(
              "SIB_DEFAULT_FROM_NAME",
              "Adcock & Ivison PLLC"
            ),
          },
        },
      ],
    },
  },
});
