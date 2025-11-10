import React from 'react';

function Brokerage() {
    return ( <>
    <div className="container mt-5">
    <div className="row">
        <div className="col-12">
            <h4> 
                Demat Account Related Charges
            </h4>
            <table className="table table-sm table-dark ">
              
                <tbody >
                    <tr>
                        <td className="col-4">Account Opening Fees</td>
                        <td className="col-8">0$ account opening charges for Individuals & HUFs.</td>
                    </tr>
                    <tr>
                        <td className="col-4">Annual Maintenance Charges</td>
                        <td className="col-8">8$ + GST (2nd year onwards) for NRIs, Corporates, LLPs, Partnership Firms & Trusts accounts.</td>
                    </tr>
                    <tr>
                        <td className="col-4">DP Transaction Charges</td>
                        <td className="col-8">1$/ instruction / ISIN + GST.</td>
                    </tr>
                     <tr>
                        <td className="col-4">Pledge Charges</td>
                        <td className="col-8"> 0.1 $ transaction / ISIN + GST. Involves all requests including pledge, unpledge and invocation.</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
        <h4 className='mt-4'> 
            Other Charges
        </h4>
        <div className="col-12">
        
            <table className="table table-sm table-dark ">
              
                <tbody >
                    <tr>
                        <td className="col-4">Platform Charges	</td>
                        <td className="col-8">0$ platform charges.</td>
                    </tr>
                    <tr>
                        <td className="col-4">Auto-Square Off Charges	</td>
                        <td className="col-8">0.2 $/ order + GST. For intraday order automatically squared by our team before market closure.</td>
                    </tr>
                    <tr>
                        <td className="col-4">Call & Trade	</td>
                        <td className="col-8">0.5$ / order + GST. For every order placed through our trade desk.</td>
                    </tr>
                     <tr>
                        <td className="col-4">Payment Gateway	</td>
                        <td className="col-8"> 0$ charges on UPI payments & net banking.</td>
                    </tr>
                     <tr>
                        <td className="col-4">Interest Charges		</td>
                        <td className="col-8"> 0.0438% per day on outstanding non MTF debit and non maintenance of 50:50 margin.</td>
                    </tr>
                     <tr>
                        <td className="col-4">CUSPA Charges	</td>
                        <td className="col-8"> 0.1 $/ instruction / ISIN + GST. On transfer of shares to CUSPA due to debit in account.</td>
                    </tr>
                     <tr>
                        <td className="col-4">Bounced Contract Note		</td>
                        <td className="col-8"> 0 $ GST per delivery for re-attempt via alternate digital channel. In case of failure, 0.1$ + GST for physical delivery.</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
        <p
          className="awardPara mt-4"
          style={{ fontSize: "1.2rem" ,
            fontWeight:'bolder'
            
          }}
        >
  Disclaimer on Pricing & Charges
        </p>
        <p
          className="awardPara mt-4"
          style={{ fontSize: "1rem" ,
        
            
          }}
        >
 Please note that brokerage charges that are calculated will be within the maximum rate as specified by SEBI and the exchanges. All other statutory and regulatory charges are as per actuals.
<br/><br/>
In addition to the charges mentioned here, Dhan may offer additional products, offerings and value added services that may be charged separately; any such charges or fees will be invoiced to the clients. Brokerage is also charged on expired, exercised, and assigned options contracts. The above tariff, fees, pricing and charges are subject to change, any change will be initmated to clients 15 days in advance and the same will be also updated on the app and website of Dhan. Clients are advised to check the same from time to time and stay updated.
<br/><br/>
All above charges mentioned are for retail customers / clients only. Charges for NRIs, Companies, Partnerships, Trusts and HUFs will be different from the ones mentioned. Any services that require physical copies or offline delivery will be charged differently and separately from the ones listed above. Clients are requested to note that Dhan is a full digital and technology solution and offerings provider for its investment products and any physical / offline requests for services may have additional charges and take additional time.
        </p>

    </div>
</div></>);
}

export default Brokerage;