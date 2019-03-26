import React, { Component } from "react";
import { render } from "react-dom";

import { Timeline, Event } from "react-timeline-scribble";

class TL extends Component{
  render(){
    return(
      <div>
        <div className = "timeline_title">
          <h1>STONEWALL:</h1>
          <h2>CRUCIAL BECAUSE IT SOUNDED THE RALLY FOR THE MOVEMENT.</h2>
          <h3>—Lillian Faderman, historian, The Gay Revolution</h3>
        </div>
        <div className = "timeline">
        <Timeline className = "timeline">
        <div className = "parent">
          <Event interval={"As early as the 1850s"} title={"GREENWICH VILLAGE AND PRE-STONEWALL LGBT LIFE"} subtitle={""}>
          <div className = "hover-content">
          <div className = "GREENWICH-VILLAGE_img"/>
          As early as the 1850s, gay men congregated in Greenwich Village. Pfaff’s, 647 Broadway at Bleecker Street, was a hangout for “bohemians” such as Walt Whitman and for men seeking men. Bleecker Street in the 1890s had a number of “fairy” bars, often subject to raids, where cross-dressing young men solicited male customers. The picturesque Village prior to World War I became popular for the artistic and socially and politically progressive. Middle-class gay men and lesbians appropriated their own spaces despite some opposition from fellow Villagers.
          <br/><br/>
          The Village emerged as the first neighborhood with a significant LGBT population in New York City and one of the first nationally. Through the 1960s, the area south of Washington Square was the location of many bars and clubs that welcomed or merely tolerated LGBT patrons. Gay bars were crucial to creating a sense of community and cultivating political action in an era of discrimination.
          </div>
          </Event>
        </div>  
          <div className = "parent">
          <Event interval={"1969"} title={"STONEWALL"} subtitle={"THE SHOT HEARD ROUND THE WORLD"}>
          <div className = "hover-content">
          <div className = "STONEWALL-RIOT_img"/>
          The 1969 Stonewall Uprising was a key turning point in the history of the LGBT civil rights movement in the U.S. The uprising dramatically changed the nearly two-decade-old movement by inspiring LGBT people throughout the country to assertively organize on a broader scale. In the years that followed, hundreds of new organizations were formed on campuses and in cities across the country as a younger generation of activists came out of the closet and demanded full and equal rights. As historian Lillian Faderman wrote, Stonewall was “the shot heard round the world...crucial because it sounded the rally for the movement.”
          <br/><br/>
          In the early hours of Saturday, June 28, 1969, police raided the “private” Mafia-run Stonewall Inn. The bar, one of the few that allowed dancing, was popular with a younger, diverse crowd. Instead of dispersing, the expected result of a routine raid, a crowd consisting of bar patrons, street youth, and neighborhood residents became increasingly angry and began chanting, throwing objects as the police made arrests. Police called in reinforcements but were barricaded inside the bar. For hours the police tried to clear the neighboring streets while the crowd fought back. The rebellion lasted over the course of six days to July 3. In the immediate aftermath of Stonewall, the Gay Liberation Front and the Gay Activists Alliance were formed in NYC in 1969. Marsha P. Johnson and Sylvia Rivera founded STAR (Street Transvestite Action Revolutionaries), an early transgender group, in 1970, followed soon after by LGBT rights groups in nearly every major city in the U.S.
          </div>
          </Event>
        </div>  
          <div className = "parent">
          <Event interval={"1890s TO 1960s"} title={"WASHINGTON SQUARE PARK AND ENVIRONS"}>
          <div className = "hover-content">
          <div className = "WASHINGTON-SQUARE_img"/>
          By the 1890s, Bleecker Street was known for its various “dives” attracting men. The block of MacDougal Street just south of Washington Square emerged as the cultural and social center of Greenwich Village’s bohemian set, with an openly gay and lesbian presence in the 1910s. Through the 1960s, the South Village was the location of many LGBT bars and commercial establishments. Numerous LGBT writers and artists made the Village their home. Meetings at several area churches in the 1960s fostered LGBT rights activism.
          </div>
          </Event>
        </div>  
          <div className = "parent">
          <Event interval={"1890s TO PRESENT"} title={"HUDSON RIVER WATERFRONT AND PIERS"}>
          <div className = "hover-content">
          <div className = "HUDSON-RIVER_img"/>
          For over a century, the Greenwich Village waterfront along the Hudson River, including the Christopher Street Pier at West 10th and West Streets, has been a destination for the LGBT community. It evolved from a place of maritime commerce and waterfront saloons, to a popular locale for cruising and sex for gay men by the 1960s, to an important refuge for marginalized queer youth of color today.
          </div>
          </Event>
        </div>  
          <div className = "parent">
          <Event interval={"1920S TO PRESENT"} title={"NYC AIDS MEMORIAL AT ST. VINCENT’S TRIANGLE AND ENVIRONS"}>
          <div className = "hover-content">
          <div className = "aids-memorial_img"/>
          Since the early 20th century, this neighborhood has been home to many LGBT people, establishments, and organizations, and is closely associated with the AIDS epidemic. By the 1980s, Greenwich Village was the epicenter of the disease in the city. Since 1983, New York’s LGBT Community Center (208 West 13th Street) has served hundreds of thousands of people – this is where ACT UP (AIDS Coalition to Unleash Power) and other groups were organized and met. The former St. Vincent’s Hospital had the first and largest AIDS ward on the East Coast. The New York City AIDS Memorial, at the intersection of 7th and Greenwich Avenues and 12th Street, honors the more than 100,000 New Yorkers who have died of AIDS and recognizes the contributions of caregivers and activists.
          </div>
          </Event>
        </div>  
          <div className = "parent">
          <Event interval={"TODAY"} title={"RELEVANCE OF STONEWALL TODAY"}>
            <div className = "hover-content">
            <div className = "STONEWALL-INN_img"/>
            Stonewall has taken on shifting meanings. When it was in operation in 1967-69, it was a Mafia-run bar, and representative of the societal harassment against the LGBT community. It has evolved into a National Historic Landmark and National Monument with worldwide symbolic resonance. It is a shrine, symbol, rallying place for civil rights and solidarity. It is a place for mourning and remembrance. It was the site for the rally after the Snake Pit arrests and the first Pride March in 1970, the Anita Bryant protests in 1977, and demonstrations for LGBT civil rights in the 1980s. More recently, people celebrated here for the legalization of same-sex marriage in New York State in 2011, the overturning of the federal Defense of Marriage Act by the U.S. Supreme Court in 2013, and after the Supreme Court legalized same-sex marriage nationally in 2015. People commemorated here the victims of the 2016 mass shooting at Pulse, a gay nightclub in Orlando, Florida.
            </div>
            </Event>
         </div>
        </Timeline>
        </div>
      </div>
    )
  }
}

export default TL;
