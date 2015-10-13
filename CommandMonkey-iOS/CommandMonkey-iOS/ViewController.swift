//
//  ViewController.swift
//  CommandMonkey-iOS
//
//  Created by Jose Luis Teran on 10/12/15.
//  Copyright (c) 2015 Microsoft. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet var button: UIButton!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func buttonTapped(sender : AnyObject) {
        var url : String = "http://commandmonkey.azurewebsites.net?command=dance"
        var request : NSMutableURLRequest = NSMutableURLRequest()
        request.URL = NSURL(string: url)
        request.HTTPMethod = "GET"

        NSURLConnection.sendAsynchronousRequest(request, queue: NSOperationQueue(), completionHandler:{ (response:NSURLResponse!, data: NSData!, error: NSError!) -> Void in

            // HTTP Response
            println(response)

            // Data Response
            println(data)
        })
    }

}

