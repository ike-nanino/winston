

function Perspectives() {
  return (
    <main>
        <section
        className="relative bg-cover bg-center h-[500px] md:h-[750px] lg:h-screen"
        style={{ backgroundImage: `url('/images/perspective.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 left-6 md:left-[80px] right-0  lg:right-[686px] top-40 bottom-[120px] flex items-center">
          <div className="text-white text-start">
            <h1 className="text-sm font-nespressoMed text-madder mb-4">
              Perspective
            </h1>
            <h1 className="text-base lg:text-xl font-normal font-trajanPro mb-4">
              Sometimes all you need to navigate the legal landscape is a little information. Our blogs and articles touch on a wide spectrum of legal matters that can pop up in both business and everyday life, and we hope they’ll shed a little light wherever you happen to need it.
            </h1>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-white px-6 py-10 md:px-16 lg:px-32">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-3/4 space-y-6 text-gray-800">
            <div>
              <h1 className="text-3xl text-madder font-bold mb-2">
                Understanding the PPSA Filing Process in Ontario: A Guide for Secured Creditors
              </h1>
              <p className="text-sm text-gray-500">News · Winston & Co.</p>
            </div>

            <p>
              In Ontario, the Personal Property Security Act (PPSA) governs secured transactions. When a creditor wants to secure an interest in a debtor’s personal property, it’s essential to register a financing statement under the PPSA.
            </p>

            <h2 className="text-xl font-semibold mt-6">Step 1: Obtain a Security Agreement</h2>
            <p>
              A written security agreement is required to create a valid security interest. This agreement outlines the collateral involved and the rights of the secured party.
            </p>

            <h2 className="text-xl font-semibold mt-6">Step 2: Register with the Ontario PPSA Registry</h2>
            <p>
              Once a security agreement is signed, the creditor should file a financing statement online through Ontario’s ServiceOntario system to perfect their interest.
            </p>

            <h2 className="text-xl font-semibold mt-6">Step 3: Renewal and Maintenance</h2>
            <p>
              PPSA registrations are valid for a fixed term. Creditors must monitor expiry dates and renew accordingly to maintain priority.
            </p>

            <h2 className="text-xl font-semibold mt-6">Why It Matters</h2>
            <p>
              A properly filed PPSA registration ensures a creditor has legal priority in the event of default or bankruptcy.
            </p>

            <h2 className="text-xl font-semibold mt-6">Final Thoughts</h2>
            <p>
              For lenders and business professionals, understanding Ontario&apos;s PPSA is critical to protecting financial interests.
            </p>

            <hr className="my-10" />

            <div>
              <h1 className="text-3xl text-madder font-bold mb-2">
                Ontario Employment Standards: What Every Employer Should Know
              </h1>
              <p className="text-sm text-gray-500">Employment · Compliance · Winston & Co.</p>
            </div>

            <p>
              The Employment Standards Act, 2000 (ESA) sets minimum standards for most workplaces in Ontario. Employers and employees should be familiar with its core principles.
            </p>

            <h2 className="text-xl font-semibold mt-6">Hours of Work and Overtime</h2>
            <p>
              Employees are entitled to overtime pay at 1.5 times their regular rate after 44 hours of work in a week, unless exempted.
            </p>

            <h2 className="text-xl font-semibold mt-6">Leaves of Absence</h2>
            <p>
              The ESA guarantees job-protected leaves such as maternity leave, parental leave, sick leave, and more.
            </p>

            <h2 className="text-xl font-semibold mt-6">Termination and Severance</h2>
            <p>
              Employees may be entitled to termination pay or severance pay depending on length of service and business size.
            </p>

            <h2 className="text-xl font-semibold mt-6">Final Thoughts</h2>
            <p>
              Staying compliant with the ESA helps protect businesses from costly disputes and ensures fair treatment of workers.
            </p>

            <hr className="my-10" />

            <div>
              <h1 className="text-3xl text-madder font-bold mb-2">
                Real Estate Law in Ontario: Key Legal Considerations When Buying a Home
              </h1>
              <p className="text-sm text-gray-500">Real Estate · Winston & Co.</p>
            </div>

            <p>
              Buying a home in Ontario involves more than just signing an agreement of purchase and sale. Understanding key legal requirements can save time, money, and legal headaches.
            </p>

            <h2 className="text-xl font-semibold mt-6">Title Searches and Due Diligence</h2>
            <p>
              Lawyers conduct title searches to ensure the property has no liens, easements, or title defects.
            </p>

            <h2 className="text-xl font-semibold mt-6">Land Transfer Tax</h2>
            <p>
              Ontario homebuyers must pay a land transfer tax based on the purchase price. First-time buyers may qualify for a rebate.
            </p>

            <h2 className="text-xl font-semibold mt-6">Closing the Transaction</h2>
            <p>
              Your lawyer coordinates with the seller’s lawyer to complete the financial exchange, register the property, and transfer keys.
            </p>

            <hr className="my-10" />

            <div>
              <h1 className="text-3xl text-madder font-bold mb-2">
                Civil Litigation in Ontario: What You Need to Know Before You Sue
              </h1>
              <p className="text-sm text-gray-500">Litigation · Winston & Co.</p>
            </div>

            <p>
              Whether it’s a contract dispute or a negligence claim, Ontario’s civil litigation process involves key procedural steps and timelines.
            </p>

            <h2 className="text-xl font-semibold mt-6">Statement of Claim</h2>
            <p>
              The lawsuit begins when the plaintiff files a Statement of Claim in the Ontario Superior Court of Justice.
            </p>

            <h2 className="text-xl font-semibold mt-6">Discovery</h2>
            <p>
              Both parties exchange documents and conduct examinations for discovery before trial.
            </p>

            <h2 className="text-xl font-semibold mt-6">Settlement and Trial</h2>
            <p>
              Many cases settle out of court. If not, the matter proceeds to trial before a judge or jury.
            </p>

            <hr className="my-10" />

            <div>
              <h1 className="text-3xl text-madder font-bold mb-2">
                Family Law in Ontario: Divorce, Custody, and Support
              </h1>
              <p className="text-sm text-gray-500">Family Law · Winston & Co.</p>
            </div>

            <p>
              Family law in Ontario covers matters such as divorce, parenting time (custody), spousal and child support, and property division.
            </p>

            <h2 className="text-xl font-semibold mt-6">Divorce and Separation</h2>
            <p>
              In Canada, divorce is granted on the basis of a one-year separation, adultery, or cruelty. Most couples file after separation.
            </p>

            <h2 className="text-xl font-semibold mt-6">Parenting Time and Decision-Making</h2>
            <p>
              Courts focus on the best interests of the child when deciding custody and access issues.
            </p>

            <h2 className="text-xl font-semibold mt-6">Support Obligations</h2>
            <p>
              Child support is determined using the Federal Child Support Guidelines. Spousal support considers income disparity and financial need.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Perspectives
