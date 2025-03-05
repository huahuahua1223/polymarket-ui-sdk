import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MarketChartUI, MarketChartWidget } from "../src/components/MarketChart";
import { ThemeProvider } from "../src/contexts/ThemeContext";

const meta: Meta<typeof MarketChartUI> = {
  title: "Components/MarketChart",
  component: MarketChartUI,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MarketChartUI>;

const mockChartData = Array.from({ length: 24 }, (_, i) => ({
  date: new Date(2024, 0, 1, i).toISOString(),
  price: 50 + Math.random() * 20,
}));

export const Default: Story = {
  args: {
    title: "Will Trump Win in 2024?",
    subtitle: "Presidential Election Market",
    mainValue: "64",
    mainValueUnit: "$",
    changeValue: 2.5,
    chartData: mockChartData,
    logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUQEBIPEBUQEBAVDxUVEBUVEBUVFRUWFhUVFRYYHSggGBomGxUVITIhJSorLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0eICUtLS0tLS0tLS0tLS0tLS0rLSstLS0tLS8tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwIDBQYEAwcDAwUAAAABAAIRAyEEEjEFQVFhcQYTFCKBkQcyobFSwdEjQmJyouHwFTOyJDSSJVNjc4L/xAAbAQACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EADERAAIBAgUCBAUCBwAAAAAAAAABAgMRBBIhMVEFQRMUInEVMmGBwZHRBiNCobHh8f/aAAwDAQACEQMRAD8A8iQhCvZeKEJEKQBCEKABCEJgBAQhKAIRKFIAhCEMASJUiVECoQhOSIhCFIAhCEMBCgJSEQqxQUjExrZMDn9LlSMXVwC1M1bccU1OhIu2UDSmJ7kwquPzEiJqckVoCKRqYntUoBXKJSuURSPclCJQkSp0A9AWucEUeCXD+FT5L/NQMmEi2DguiTwaH0ufIeagZCIWw3ApTgVK6VPkjzUDGRC2RgUeAU/Cp8h5qJjQiFrnBpwwKX4VO+4eagY8JIW14JL4BN8KnyHmomJCIWy7Apng0sulT5DzUTJRC1vBFPbgER6VUfcPNRRjQiFteASeAVvwmXJHm48GNlS5CtluBThglZHpHLIeLXBiCmeCs4TZ9SqcrGlxkQACdTE2FhMe616Gz8xyj1toOK9m7AdmaWHwwruZBc3N55zDrO703LH1DD08JTu3djQrub2PLdl/DrFV4cWhgmPMC1ojXzbx6X1W/hfhOASa2IsDbKIIF41HCF6Nj9q6htoBJm0DcsuvtKRNzMxe+6/vu5FedlipPbQvSZz7fh7gWMLXOrOJb53BwBI9tNFZw3ZfZlUhpblDBlGRwaXbjneZJMqWrinEy03iCJs4GDE7liUqdalUJbDmkzAProiOKqx2kw8NPc2dq/DzDOZGFeaZIiJzjlNhN+a4nbXw7xbPNTY1wMzD2gSP5jN+HGdF2mH2yWHSSNbwApMV2zFVzaZpEnMBmBieIyxppefTet+H6lWj3v7iSoHi+NwrqRLHtLXNIDgdxi4VMr2PtbsdmNbmpMLHMaSCGgvcN404DqvIsXhzTeWOEFuunUaW0heiwWJVdX7maUHFkCROKaugKCkao09qEArlEVK5ROSsEIlCRATEnZkIDUEpQr2jENKAEFKEtiQSQlKQJmAoCHJQmuUdgGQnJAEpSAKnBNSgp0Aj1FClcoyErAVjVMAo2BShWQRDGuCYVI5NhOwGFIU6EKQNrsfgO+xdNp0Dg4ngGkGT/l17Pia4FPK0WaIA+y8q7BteK8iQ14gGAdNwPGJ4L0kMd3RDSXyYsbALw/8AEVSUq6XZI6OEj6Ti9pPOY+YmdeCzX4uG5ZmJ3fZdDtHBgW377fZc5iMO4O0n7rzWax1oQTREcUW3zOvx/wAukbtMNtDiXWNtJ0MQMwSPw5cb29Fp7HwQ1hzvSQOUK+DuxpRRj4hj3iXACAQMub310jjK6bYvZyBIAmN4AJGtt+5OxdPOQxsC/wCGx11TsZt4U6uUZW5paI0Hlt9VrhYzzv2Ol2fs9rSPM0+V2a9uF9I1+oXgfbZv/UuvJDnNPGJJBPO59l3+I7SuZXb5iG5hN4tYH0n/ACy8/wC2JnEPPEg89YXZ6VL+dYyVotK5zxSJyaV6cygntTE9qAFKjcpCo3pWCGpEqRMSdmnFIEK0xCJwUmCwrq1VlJkZqj2tbJhoJMSTuA1XV1OwbyP2OJoVXjVhBpz/ACuJIPrCz1cXRoyUakrN7FsKM5puKvY5Apq0NpbHxGHE16FakJjM5h7uf5x5fqs8K9TjLWLuitprRjkxydKYVL2AUIKRCVAKnBIEqZgNcmJ7k1KSOYpVGxSK6ArEKRKUiZghCkSykQBJh8W+mQ6m4tIM2P34jkvZ+zuLJwbXCKheTN7nWSCT6ei8Rc6PRdpV24H4VtTvKlFrQWkNZma1zYEWaTeZEDceBXlv4jg8kJJd9Wb8DrJps6LGVmCqB5gTMg23Tu6fRUsVWYWBwIaXWB1PD9Vymw6dWvWY4vqPpuc4klhb5YILpc0X5Kj2mwLm1Q1hcASLZzFzcleOUPVZnbVrHWsLSTDgTpfToBqtrC1G93lytk6W/PivPcJsfFDL3WQCXS9z5MDfG762XUYHCYst/aupVBuLSQ8HW8gff2srlFIW9y8+oGukHTdFuK4zbTs1d0mPMIuRIjdDTw+i7Z2FOUeU6XlsD7mfdY21tmNHneA1s6lkj1Lbq6AskjLw2xjiY8zfLPyy4jkJDZ9oXKdp8FUpuIqyC2wkHNGondw3+69DwlQAM7mq02jLlDAOEENHNYnxCxFCrhg8vd3kljWgOIzNN2lx5SdB9V0enztiI25M1eDytnmyQpUi9ic4SE5qanNUgOTHJ6jcoYIahCRSSdrCaSqTscOKZ41M6keTLkZoseQQQSCCCCNQQtLCbcrU3Zg6eMz7rnfGpfHLNiMPh8QrVFfjlF9GrVou8P8AR6jsXtc5wDXgubo4HzNPUK9jtgbNxQz/APavNs1K1OT+JsFo626rN+F+wKNbC1MZWc4l73UabZGVuXK7PzdP0nitHtM1uEpOAsSwmmR8tQDUdRIXj61SWEryhRm7I6scteKzRszl9t9hsVhwX04xNOJzU/nA5s19pXKlezdnsYalBhaXEsLWmDq03HsqvazsWzGN72nFGvHzD5H8qgH/ACF+q6uD665WjWX3X5X7GKtgrfIeRICZtShVwtU0a7Cx7fYj8TTvHNVPGr0EKsGrp3MLg0aCVZ/jkeO5p3UjyRkZeciFn+O5pwx3NR4keQyM0QnhZgxyd4/mroVIkZGaBSLOOP5pvj+aHViTkZooJWUcdzTTjkrxEF3JVNmi8r0D4W0y6liogwaMAuixz5oJ00C8qOMXTdgdtd3iTSPy12/1Mlw+mb6LjdXqxqYSai9d/wBGacNTaqK56kKT/M94a1oY7IAdD8ol28yZ6NXO7aFNrg5+UteG5vLJBMiTwvz4LS2ttirHc0WGqQ3OWiPlbYa9VzT8dtF1U06mEzsgtcHEAHUG5jmLLxFN3udyMbbmlQwpDZbUeG2gNNiOUqzhtsMpGN44mSsnZj6lFndVSB5QQZ0/E2eR3plbCyZ58bpU9S1QT3OlO0u980fS/urD6zHMyPgg6rIwVUNGURzn9VDtzGd1RdUtIAy8MxIAn1WiLsRkV7GOcEHY2oaDnFjaga0C7SQ0F2g/Fu6jri/Eqm1j6bKdgTUe8DQuJ1joV2mxttZmGgQx7ZzNFMZWNdqbgReVwPxDr5qzWxdocSeOaCI9v83dXo8c+JUvcy4xuNNxZyaQpUi9gcgROampwUgKmuTgkchgRwhKUiEST96eKO9PFMQF5HxZ8m+yJO8PFHeFRlKEKrPkLI9m+HuGrf6SypSc2oO9rPqNFnM8xaP5vln1i66LEY2jXoGhXa2o0i07juIIuD0WB8LsXl2awUoc5r64qNtcl7iB7Ee6w9u7QPe1BUL8OXE6jL9CLrh15N1Ze5rowzHWbK7V4XD024fO1pY0gEmPMDck89VUxHxHYauRhc68SPlXBt7P1sRTPcE4hznRYQ0DeXO/ILL8HVw1c0ajQKjYEWdrcRGuqvhGyNcKFKUmu56B8TcC7E4OnXpNNR9OpJyNzP7t4h0AXIDss9Oq8jFU7ivZOzG0XS2Xl4AuYeIPLMBOkSJ+yxe1WwRj8ZWoUgxuLawVcOQIGKp5QX0qm7vm6tf+82zpIBG6lXcfTc5tWGV6nmveHik7w8U7EYd9M5Xtc031HBRq91Z8leg41CgVDxTUI8WfIWQ7vDxR3h4pqE6qz5DKhc54ozniuj7NdmDiB3tYllKCWgWe8AxMn5WzadTfTVT7bw+FoECnh6bo1zvqkGN3zozz3uVupFOxymYoJK6CntPDAf8AaUD6T/ylRVto4V1jhGjm2plP0AVbm33DxFwYkq/sDE93i6D9za1OejjlP0JUOJpM+akXRva75h0IsR9VWDiLjUXHUXCSWqsWRlc+gNn4ilQJfUDnPeYY0AucQ3TK0XcZzW5cln4zbRzf7GMg3LnUiPvCiwpOLc19EFxNJuQgkQ19yQRv0+qix3ZmlOZ1arUNgB3n7PnrrfivPwlbQ3JK92UMRtelUJa4OZPyksc2CdNRxVjBiWwZ00jT13jqldsHI2zxG4ZbLKr4p9J94M2BBkJk9S6NnsblJwbYf3VXH0jWApi4a9rnE7gPuVQqV3P+S5gLbp0e7pXu6ZetUSXoV+0FZ2Gp98xhcyjSZniJaHOyhxG8TlB4ZgvMu0e0xisQ6q1paCGhoJ/CI/Vex0aQxNejhIJGLwe0GVOAYW04cejo9YXiOJw5Dc0FpDiyq38DxYjpII6g8l6Lo86d7P5jjYxvMVikKEL0ZjEShNTggB4TXJwTXKWBGUiUpEIklQhC8adAEBCAhAjX7N7fqYGt3jPM10CrTmA8fk4biu82l8QKdRrW05MXuBv3XMyF5anUqTnuDGNc9zjDGtaXPceDWi5Koq4eFR3ZbTqKD1Vz0Wl23rXyyxpGWXSGA8LdeKxBimZi9xL6hebm4IIkRw4LrDgP9P2dSw7g1xaHVcY0EFpq1TLmEgwS1gYydJauYfsynUeHYd4ex923+hG4rI2oPKdHD1aM73WU6HZe0w6n5zlc1vlIs0wQfMONtRxKq9ksU/E7aw1YD5KjnO/hYKTmuPS8dSFG7YFcNyvy4ZhF31nZTG/JTEveejY5hbXZerh8CXOYTGUd9XqQ1zg2/laDFNk3iSTaSYAFtOLlJGWunJNwWhg9vmMbtPF0oBYawdG6X02VHEf/AKeVxmL2c5pJYC5vL5h6b1o7c2ocTiq2JNu+queBvDdGDrlDVFTxG6bH3HqurZSikzjKUovQxULUrUW1HGbO1BEQ7n1VUYFxIDC10mLuDIPPMQB7qpwaZojVi/oVVf2Jg21qwbUOWm3zVTMeUEDKOZJA9Z3K3R7PE/PXoN/lJefyEc5V/Z+JpYIzTY99W0PqFpYObGt6neeqZKwTqq1ludM/bFAAsbLfJDGFpYCBYBs7lw+1sSajiTbcBwTtrY59aS4m5zETaeI4KkyrnEH5hqeI/VRKV9DPGNtStKaSnR+aY5Z2Wk1Mq5svZorPIc8U2tBLtM0C5ibAR+8dLWKo0ypmvymRB6gH7p0RdrY7bYXaDwwFLDkOa0ugB5J7uDMuOpHzcNQLQrG0e1YaLZwT8tjlIOpG4zGvouFLWlpLS5hIIIEhp/hUmB2iWju3jPTP7u9vNh3HloVkrYWMpZor7GqhiXHSR0FXtO94ytkA2NgFR754M5nX4lRUsNSf8lUjhMT7K/hMtMgVWCq3qR6ghZ8qWljpxkpao3ezOKabOid26f8APzXVVGtAkxB1lYOA2Lhan7SjXyfwGHkHg20z6r0vs52aLctXES8tg0mODfLwc6B83Ld10tjG5nr1FEsdkdjd03v6jctR9NrGgjzNpgl1+BcTJHJo1C8U7dbD8PtPFUjAp4mo+pTjcXhtU+znL6NIXh3xXrf9Y58fJiKbB07hua/UfRbsPLJNNHKqtyu2eWYzBPpGHAxucB5T6/kqy7ei8EclVxeAom7qbTO9stP9Np6r0ccYv6kZFI5FAK262xqZ+R7mng6HD3ER7KnU2RVboGv/AJXCfYwVohiKctmPdFMJHJXNIMEEEagiD7FIVeBGUIQgkkQrHhSg4YryzwlXg2+JHkroU/hil8MVKwlXgPEjyQLpuxXat2zjUy0qVQVRL3FsVQAD5Q8Qcht5ZEmLrA8MUeGKPJVX2I8WPJ6Hi+2tZzBVpOwwa6coGHp6jVp7xpcDPP6GVku7a4p3zVi0x5skUx/QAuS8KmgBp8wPJZqmEqUleSNEcak/TGP6HSf63vPmJMkzJPqszam0nVPKTDZ049VnnEAfK31d+gUDqhJkmSqYpImvjatVWei+hae/gnYd0yFUzKTDPgrVGepglHQsSTbe0y39EOfvvzHH+6irOh2YKZzpuN+vXepEsSUa/PoeP904mbG6zy7K7kVNUeQQfRRm0BokL4OU9WnfzCqk5X2U1cSJGrTKSsMzQ4btUkkMmOY0EHqqlVsWVim6CnYqnaUNXQJlekVJTfeFA1PKrTGZcfVeRE25WUQoFWaUFoKcGK9QuVuRAaE2K63b9bAUsHSDKMYrEU2khtasWUmkf7haXRmOgbpYnSx5wthdBgezdKtQOJqPLfK8vJMNaGW14w3hvVdeCy3LaFRqZlbB8rhUYX5mkFrg4hzSNCCLtvvC9y+HPbhuPDsPWMV6W+IbVbxH8Y3joRrA8R2DRIewNj9qCG5jAGd+RmcjS5BJ3LvtlfD7EYRzHg1G1qThUD2QRYiQw8dddeCywO/1OVNUKcXG0t/b/p7SvFfiVTc6lXqGMox7SzSf/bMnqvWdi7TGIpZtHttUbwPGOB/tuXm3bvCTsys7jVbV6TXDz9yrY6NHnpbHnVF8KWpVaAZNiNN8qEaJtRpiQPl1MaTa/C6697IxFbOrjWmJVdtOTdWTUiwSxRLGZWVRkqAO4cR0OoWVtHYb2eanL28P3x+qtmpDvVa1CtIur6NeUNib2OEISLsdo7NpVAXuaQQJLm2PqN65XHYU0ahY68aHcQdCF1KNeNTRblilc6M4YJPCjgrCSVqcUZbsh8KEeFCsSklTlQXZD4YI8KFOlU5UF2VjhgmPwgIggEK0U1LKCaswUmY2L2SRenf+E6+nFZhbxsuqKq43BioNIduPHkVxcZ0pNOdHR8fsaqeIe0jnU5rk6pTIJBGmvEKNcDVM1kwfKUPgKBKCnUxcpJVuJQ2paP8AOSjY7cglRm7hYtsfbqmUDEhQsdaOBspGuvPRPmuJYkKsMEiFEAn0jCdEMp1GQYTVcxjN6qgKqUbMZO6LeznyS31C0siw6FTK8Hmt7NIlaKDvGxVUWpBUYpcVtVwwzcKARnqlzzxYMsM/8pJ6DimuKrY1nmpn+b8v0S116Gy/Ba14p8mztO1KmGaFoJG4m2o917p8Pe0HjsGM5mrQhlWdXW8j/UfUFeFGoIp5rgWPTQ/Rd18KsSaGOdh3ERWouE7iW+Zp9g73XPhoz2XVcKquHcu8dV+f7HrjsI2e9aA15HmI/eHBw3/dcT20o/8ApeJabkUH/wBN/wAl3zBYdFyXaymDQxDDo6lXH/kw/qrDxbPDqN2g8l2nw82tg8M6q3F3GKa2kZZmpNYMxOfk4uA5Zb204nAOmm3oFLUC60o542ZkTyyNXtZh8PTxtanhP9pjmBn7TO0ktBdld+GTFydDdYbt6dSsfUpp3+qaKsrEN6lF7vMtPDussl5utLBuskpvVjSWg/atf9kQP3i1vuQocaxr3S65AAk62UONOZ7WgTcu5mB/cJr6xnX/AD1VkZ5ZNoizsXnFR5kpKZK9E2UkoQEjUqZEDgglICglMAhKSU1xRKS5IqUBASpkBUxmBbUv8p4j8+KzauyHj5S130P6fVbqaSsVfp9Cs80lryi2FacdEctUplphwIPMQmLqKjQ4Q4AjgRKrO2bSP7pHRxXKqdFqX9Ek/fQvWJXdHPlNK18Vsi00yeh/IrLqUnNMOBB5hc2vhKtB+tffsXRnGWwjU+U1oSws4xZovlWmtVGk6FoUXyFog7lUiZtHM0jlZZJEGFrUn5Squ06MHONCnqRvG4sHrYpPatXB1czBysfRZgVzZbrlvG4VdJ2kNNXRacU2tfKeDx9QQpKlKUwUQAdbQfYq6om4tDYWSjWhL6r/ACXqgsF1XZ6qaeKwtb/5KDT0c4Nd9CVzVQ2HILQ2diCMv8D2EejgVzFufSK0M1Nr6fg+kCuW2v56hadCHT62XS1nwJXPOAdUJO8WTs+cM+f9mCKYb+G3srLlBQEF/wD9j/8AkVZhdmHyoxS3Iw246E/ZRgaqR7ssng0D81BhqmYwnIM6tqr+FPl9FUrsuVPSMMPJUQ0kWPVFN9Xzudawj3v+inpbNdUGfO0TuJuq+AwbqptoDLvXQeyuvovYYgogr6taEydtETEpoQhekZnRI0olCE6IFlNcUqFIEZKUIQlW5JIkzIQnICUwlKhDAAE6EITRAIVXaNHNTPIg+xv9JSoSV4KdOUX3TJg7NMwmUvKDxn7x+SXIhC8TY6QKWi+EIUohlpj5VmM7S079EiFphqUSMhzcpgqSg/K9rud+hshCzbPQt3RtVCoHFCFsnsyqlpNe5fJsOgU2GdcfzN+6VC5K3PqUn6X7H0finWhYtV4ZLzYNBcegEn7IQplufND57wOI7wZojMSSOE3WgwoQu1S+RGOfzFbFumQOKMJSiShCewrICzMSlqsysM2SISW3GQmAxDaTA4kRlGUDVxN/0HorlPar3CTTHK8WQhLTk3oTPRXP/9k=",
    actions: {
      onBookmark: () => console.log("Bookmark clicked"),
      onShare: () => console.log("Share clicked"),
      onCopy: () => console.log("Copy clicked"),
    },
  },
};

export const WithNegativeChange: Story = {
  args: {
    ...Default.args,
    changeValue: -2.5,
  },
};

export const WithActions: Story = {
  args: {
    ...Default.args,
    actions: {
      onBookmark: () => console.log("Bookmark clicked"),
      onShare: () => console.log("Share clicked"),
      onCopy: () => console.log("Copy clicked"),
    },
  },
};

export const WithWidget: Story = {
  args: {
    ...Default.args,
  },
  render: () => <MarketChartWidget />,
};
