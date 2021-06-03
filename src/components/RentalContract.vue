<template>
  <div>
    <div class="title">RENTAL CONTRACT</div>
    <div class="subtitle">(hereinafter referred to as AGREEMENT)</div>

    <div class="card block">
      <div class="card-content">
        between
        <div>{{ contract.landlord.name || "Landlord legal name" }}</div>
        <div>Dob: {{ contract.landlord.dob || "Landlord Date of birth" }}</div>
        <div>
          ID No:{{ contract.landlord.idNumber || "Landlord ID Number" }}
        </div>
        <div>
          Telephone No.{{ contract.landlord.phone || "Landlord Phone number" }}
        </div>
        <div>{{ contract.landlord.address || "Landlord address" }}</div>
        <div>
          email:
          {{ contract.landlord.email || "landlord E-mail address" }}
          (hereinafter referred to as LESSOR) and
        </div>
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div>{{ contract.tenant.name || "Tenant legal name" }}</div>
        <div>Dob: {{ contract.tenant.dob || "Tenant date of birth" }}</div>
        <div>ID NO: {{ contract.tenant.idNumber || "Tenant ID number" }}</div>
        <div>
          Telephone No. {{ contract.tenant.phone || "Tenant phone number" }}
        </div>
        <div>email: {{ contract.tenant.email || "Tenant E-mail address" }}</div>
        <div>
          (hereinafter referred to as TENANT) (LESSOR and TENANT together
          hereinafter shall be referred to as PARTIES)
        </div>
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">1. OBJECT OF AGREEMENT</div>
        TENANT wishes to rent
        {{
          contract.property.isFurnished
            ? "a furnished"
            : "an unfurnished" || "a furnished"
        }}
        {{ contract.property.type || "Property type" }}, located
        {{ contract.property.address || "Property Address" }}, hereinafter
        referred to as PROPERTY. PROPERTY comprises
        {{ contract.property.sqm || "Property Square meters" }} square metres of
        floor area, its limitations defined and restricted to the contiguous
        spaces reached through the entrance door to the apartment, together with
        contents as defined in APPENDIX 1 INVENTORY to AGREEMENT.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">2. OWNERSHIP</div>
        LESSOR declares that they are the owner of PROPERTY.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">3. RENT</div>
        TENANT shall pay LESSOR a monthly rent of
        {{ contract.property.rent }}Kc (hereinafter referred to as RENT) on or
        before the 10th of every month for the duration of the term of this
        agreement. RENT shall be inclusive of all energy, water charges and
        building service charges (maintenance and other charges charged by the
        homeowners association). If TENANT fails to pay RENT within 14 days of
        due date, LESSOR shall be entitled to terminate AGREEMENT. TENANT shall
        pay RENT into LESSOR’s bank account at EQUA BANK, account number:
        1028109133/6100. An increase in RENT to the sum of 16,000Kc per month
        shall be payable for the residual TERM of the lease from the 4th day of
        the month following the completion of the works listed in APPENDIX 3. If
        these works are not completed RENT shall remain at 15,000Kc per month.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">4. DEPOSIT</div>
        TENANT shall pay LESSOR a sum of 15,000Kc (hereinafter referred to as
        DEPOSIT) upon signing of this agreement. DEPOSIT shall be returned to
        TENANT at termination or expiration of AGREEMENT minus any deductions
        the basis of which are set out in clauses 10 of AGREEMENT.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">5. USE PROPERTY</div>
        TENANT shall be the only person to inhabit PROPERTY. Guests of TENANT
        may from time to time inhabit PROPERTY at TENANT invitation for a period
        of up to 20 days. If TENANT wishes a guest (meaning one individual) to
        inhabit PROPERTY for more than 20 days, TENANT shall inform LESSOR and
        pay an additional 250Kc RENT per month for the period that the guest
        inhabits PROPERTY. All guests shall be subject to the same terms and
        conditions as contained in AGREEMENT. TENANT shall use PROPERTY for
        residential purposes only and in such manner to avoid causing damage to
        the premises or to its contents. In case Lessee causes such damage, they
        shall compensate Lessor for such damage immediately. By signing the
        AGREEMENT, TENANT confirms receipt of document 999/11 STANOVY and agrees
        to abide with the requirements contained therein. TENANT shall not
        smoke, or permit others to smoke in PROPERTY.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">6. TERM</div>
        PROPERTY shall be made available for use by TENANT on 05/05/2019. The
        term of this agreement shall be until 05/05/2020, unless extended by
        written agreement between PARTIES. During the final month of the lease
        agreement, or an extension thereof, Lessor may request Tenant to allow
        Lessor and/or his agent to show the apartment to potential new lessees.
        The time of such showing shall be mutually agreed based upon reasonable
        notice to Tenant, and shall be mutually convenient for both Lessor and
        Tenant.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">7. TERMINATION</div>
        Either LESSOR or TENANT may terminate AGREEMENT by giving 60 days’
        notice in writing to the other Party. RENT shall be paid to the end of
        the month after the date of termination.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">8. MAINTENANCE</div>
        TENANT undertakes to use PROPERTY and LESSOR owned equipment in proper
        and reasonable way. LESSOR undertakes to maintain PROPERTY and LESSOR
        owned equipment contained therein. TENANT shall inform LESSOR of any
        issues in need of repair in writing and agree a reasonable timescale for
        repairs. Lessor is responsible for the routine maintenance and repair of
        the subject of the lease, mainly heating (gas), water and electrical
        lines and household appliances. Tenant undertakes to immediately notify
        Lessor of all damages to the leased premises on the mobile number and
        e-mail address listed at the beginning of this lease. Lessor is obliged
        to make all necessary repairs within a reasonable time at their expense
        (unless the damage was caused by Tenant).
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">9. CONDITION OF PROPERTY</div>
        TENANT agrees with LESSOR that the photographs contained in Appendix 2
        of AGREEMENT are a fair representation of the condition of PROPERTY at
        the start of the term. TENANT shall compensate LESSOR for any damage in
        excess of fair wear and tear to Property either at time of occurrence of
        damage or at termination or expiration of AGREEMENT. LESSOR shall be
        entitled to receive such compensation by making deductions from DEPOSIT.
        If the amount of compensation exceeds DEPOSIT, TENANT shall pay LESSOR
        any excess amount plus an additional sum of 15,000Kc to reinstate
        DEPOSIT.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">10. CONTENTS OF PROPERTY</div>
        TENANT confirms that the inventory in APPENDIX 1 of this agreement in an
        accurate representation of the contents of the property. Any damage or
        breakages shall be either paid for or replaced by TENANT. LESSOR shall
        be entitled to use DEPOSIT to receive compensation in the same way as
        set out in clause 9 of AGREEMENT.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">11. INSURANCE</div>
        LESSOR is responsible for insurance of personal property inside the
        PROPERTY. TENANT shall be responsible for all loss or damage to TENANT
        personal property how-so-ever caused.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">12. LESSOR ACCESS TO PROPERTY</div>
        If LESSOR requires access to PROPERTY for inspections or other purposes,
        LESSOR shall request such access in writing. TENANT shall grant access
        to LESSOR within 3 days of receiving such a request from LESSOR. LESSOR
        and/or others shall have the right to access PROPERTY in case of
        emergency as defined in STANOVY.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">13. AGREEMENT</div>
        AGREEMENT is the entirety of matters between PARTIES and has been
        reproduced in two copies for signature and retention by PARTIES. Any
        extensions or variations to AGREEMENT shall be in writing and signed by
        PARTIES
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">14. GOVERNING LAW</div>
        The law governing AGREEMENT shall be the Civil Code of the Czech
        Republic.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">15. NOTICES</div>
        PARTIES shall deliver all notices in writing by email to email addresses
        stated in AGREEMENT and also by printed document delivered by hand.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">16. DISPUTES</div>
        If a dispute arises between LESSOR and TENANT, PARTIES shall seek to
        resolve matters by the appointment of a mutually acceptable mediator
        before resorting to any action through the legal system.
      </div>
    </div>

    <div class="card block">
      <div class="card-content">
        <div class="title is-5">17. EFFECT AND CHANGES</div>
        The Contract becomes valid and effective on the day of its signing by
        both Parties. Any changes or amendments to this Contract must be made in
        writing after previous agreement of the Parties.
        Signed…………………………………………LESSOR Dated……………………Place………..…..
        Signed………………………………………TENANT Dated……………………Place…….………
      </div>
    </div>

    <div class="card block" v-if="contract.property.isFurnished">
      <div class="card-content">
        APPENDIX 1 INVENTORY 1
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RentalContract",
  props: {
    contract: Object,
  },
}
</script>

<style></style>
